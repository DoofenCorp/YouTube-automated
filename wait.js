function waitForElement(selector) {
    return new Promise((resolve) => {
      const observer = new MutationObserver((mutationsList, observer) => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });
  
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  }