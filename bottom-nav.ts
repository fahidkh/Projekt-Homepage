interface NavItem {
    label: string;
    link: string;
  }
  
  class BottomNav1 {
    private items: NavItem[];
  
    constructor(items: NavItem[]) {
      this.items = items;
    }
  
    render() {
      const nav = document.createElement('nav');
      nav.classList.add('bottom-nav');
      this.items.forEach(item => {
        const a = document.createElement('a');
        a.textContent = item.label;
        a.href = item.link;
        nav.appendChild(a);
      });
      document.body.appendChild(nav);
    }
  }
  
  const bottomNav1 = new BottomNav([
    { label: 'Home', link: 'index.html' },
    { label: 'About', link: 'about.html' },
    { label: 'References', link: 'references.html' },
  ]);
  bottomNav.render();
  