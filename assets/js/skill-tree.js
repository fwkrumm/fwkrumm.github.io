(() => {
  'use strict';

  const forest = document.querySelector('[data-skill-forest]');
  if (!forest) return;
  const nodes = new Map(Array.from(forest.querySelectorAll('[data-node]'), node => [node.dataset.node, node]));
  const paths = Array.from(forest.querySelectorAll('.connections path'));
  let active = null;
  let pinned = false;
  let dismissTimer;
  let restoringFocus = false;
  let dismissedNode = null;

  const panelFor = node => document.getElementById(node.getAttribute('aria-controls'));
  const highlight = node => {
    const tree = node?.closest('[data-tree]');
    paths.forEach(path => path.classList.toggle('is-active', Boolean(node && (
      node.classList.contains('root-node') ? path.closest('[data-tree]') === tree :
        path.dataset.from === node.dataset.node || path.dataset.to === node.dataset.node
    ))));
  };

  const drawConnections = () => {
    paths.forEach(path => {
      const from = nodes.get(path.dataset.from);
      const to = nodes.get(path.dataset.to);
      if (!from || !to) return;
      const map = path.closest('.tree-map').getBoundingClientRect();
      const start = from.getBoundingClientRect();
      const end = to.getBoundingClientRect();
      const startX = start.left + start.width / 2 - map.left;
      const startY = start.top + start.height / 2 - map.top;
      const endX = end.left + end.width / 2 - map.left;
      const endY = end.top + end.height / 2 - map.top;
      if (path.dataset.via === 'left') {
        const gutter = 8;
        path.setAttribute('d', `M ${startX} ${startY} H ${gutter + 12} Q ${gutter} ${startY} ${gutter} ${startY + 12} V ${endY - 12} Q ${gutter} ${endY} ${gutter + 12} ${endY} H ${endX}`);
      } else if (window.matchMedia('(max-width: 600px)').matches && path.dataset.from === 'python' &&
          ['pymembar', 'pookiepy'].includes(path.dataset.to)) {
        path.setAttribute('d', `M ${startX} ${startY} V ${endY - 60} Q ${startX} ${endY} ${endX} ${endY}`);
      } else {
        path.setAttribute('d', `M ${startX} ${startY} L ${endX} ${endY}`);
      }
    });
  };

  const positionPanel = () => {
    if (!active) return;
    const panel = panelFor(active);
    const viewport = window.visualViewport;
    const width = viewport?.width || window.innerWidth;
    const height = viewport?.height || window.innerHeight;
    const offsetX = viewport?.offsetLeft || 0;
    const offsetY = viewport?.offsetTop || 0;
    const rect = active.getBoundingClientRect();
    const mobile = window.matchMedia('(max-width: 600px)').matches;
    panel.style.maxHeight = '';
    let panelRect = panel.getBoundingClientRect();
    let left = rect.right + 12;
    if (left + panelRect.width > offsetX + width - 12) left = rect.left - panelRect.width - 12;
    left = Math.max(offsetX + 12, Math.min(left, offsetX + width - panelRect.width - 12));
    let top = mobile ? offsetY + height - panelRect.height - 12 :
      Math.max(offsetY + 12, Math.min(rect.top - 12, offsetY + height - panelRect.height - 12));
    if (!pinned && (mobile || (left < rect.right && left + panelRect.width > rect.left))) {
      const above = rect.top - offsetY - 24;
      const below = offsetY + height - rect.bottom - 24;
      const placeAbove = above > below;
      panel.style.maxHeight = `${Math.max(80, placeAbove ? above : below)}px`;
      panelRect = panel.getBoundingClientRect();
      top = placeAbove ? rect.top - panelRect.height - 12 : rect.bottom + 12;
      top = Math.max(offsetY + 12, Math.min(top, offsetY + height - panelRect.height - 12));
    }
    panel.style.left = `${mobile ? offsetX + 12 : left}px`;
    panel.style.top = `${top}px`;
  };

  const close = (restore = false) => {
    clearTimeout(dismissTimer);
    if (!active) return;
    const previous = active;
    panelFor(previous).hidden = true;
    previous.setAttribute('aria-expanded', 'false');
    dismissedNode = previous;
    active = null;
    pinned = false;
    highlight(null);
    if (restore) {
      restoringFocus = true;
      previous.focus({ preventScroll: true });
      restoringFocus = false;
    }
  };

  const open = (node, pin = false) => {
    clearTimeout(dismissTimer);
    if (pinned && !pin) return;
    if (active !== node) close();
    dismissedNode = null;
    active = node;
    pinned = pin;
    const panel = panelFor(node);
    panel.hidden = false;
    node.setAttribute('aria-expanded', 'true');
    highlight(node);
    positionPanel();
  };

  const deferClose = () => {
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(() => {
      if (!active || pinned) return;
      const panel = panelFor(active);
      if (!active.matches(':hover') && !panel.matches(':hover') &&
          document.activeElement !== active && !panel.contains(document.activeElement)) close();
    }, 240);
  };

  nodes.forEach(node => {
    if (node.classList.contains('root-node')) {
      node.addEventListener('click', () => {
        close();
        const selected = node.getAttribute('aria-pressed') !== 'true';
        forest.querySelectorAll('.root-node').forEach(root => {
          root.setAttribute('aria-pressed', String(root === node && selected));
          root.closest('[data-tree]').classList.toggle('is-selected', root === node && selected);
        });
        highlight(selected ? node : null);
      });
      return;
    }
    const panel = panelFor(node);
    node.closest('[data-tree]').append(panel);
    node.setAttribute('aria-describedby', panel.getAttribute('aria-describedby'));
    node.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch' && dismissedNode !== node) open(node);
    });
    node.addEventListener('pointerleave', () => {
      if (dismissedNode === node) dismissedNode = null;
      deferClose();
    });
    node.addEventListener('focus', () => { if (!restoringFocus) open(node); });
    node.addEventListener('blur', deferClose);
    node.addEventListener('click', () => {
      open(node, true);
      panel.querySelector('.repository-link').focus({ preventScroll: true });
    });
    panel.addEventListener('pointerenter', () => clearTimeout(dismissTimer));
    panel.addEventListener('pointerleave', deferClose);
    panel.addEventListener('focusin', () => clearTimeout(dismissTimer));
    panel.addEventListener('focusout', deferClose);
    panel.querySelector('.close-details').addEventListener('click', () => close(true));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && active) {
      event.preventDefault();
      close(true);
    }
  });
  document.addEventListener('click', event => {
    if (active && !panelFor(active).contains(event.target) && !event.target.closest('[data-node]')) {
      close(panelFor(active).contains(document.activeElement));
    }
  });
  const refresh = () => { drawConnections(); positionPanel(); };
  if ('ResizeObserver' in window) new ResizeObserver(refresh).observe(forest);
  window.addEventListener('resize', refresh);
  window.addEventListener('scroll', positionPanel, { passive: true });
  window.visualViewport?.addEventListener('resize', refresh);
  window.visualViewport?.addEventListener('scroll', positionPanel);
  document.fonts?.ready.then(refresh);
  try { window.lucide?.createIcons(); } catch (error) { console.warn('Icon fallback active.', error); }
  refresh();
  document.documentElement.classList.add('tree-ready');
})();