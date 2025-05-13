function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .replace(/Мизулина/gi, 'Пиздулина')
      .replace(/Мизулиной/gi, 'Пиздулиной')
      .replace(/Мизулину/gi, 'Пиздулину');
  } else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

replaceText(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      replaceText(node);
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});