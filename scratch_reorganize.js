const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\gehan\\Downloads\\MsClub-Web-Frontend\\components';
const appDir = 'C:\\Users\\gehan\\Downloads\\MsClub-Web-Frontend\\app';

const moves = {
  sections: ['hero-parallax.tsx', 'feature-highlight.tsx', 'stats-counter.tsx', 'partners-grid.tsx', 'contact-form.tsx', 'reviews.tsx', 'mentorship.tsx', 'testimonial-slider.tsx', 'gallery-carousel.tsx'],
  events: ['events-carousel.tsx', 'UpcomingEvents.tsx', 'PastEvents.tsx'],
  seo: ['structured-data.tsx', 'seo-link.tsx', 'blog-seo.tsx', 'event-seo.tsx'],
  common: ['breadcrumb.tsx', 'lazy-load.tsx', 'optimized-image.tsx', 'theme-provider.tsx', 'uwu-aesthetics.tsx', 'button.tsx']
};

// Create dirs
Object.keys(moves).forEach(dir => {
  const fullPath = path.join(srcDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  }
});

let replacers = [];

// Move files
Object.keys(moves).forEach(dir => {
  moves[dir].forEach(file => {
    const oldPath = path.join(srcDir, file);
    const newPath = path.join(srcDir, dir, file);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      // Remove extension for import replacements
      const baseName = file.replace(/\.tsx?$/, '');
      
      replacers.push({
        oldRegex: new RegExp(`@/components/${baseName}(?=['"\\s/])`, 'g'),
        newStr: `@/components/${dir}/${baseName}`
      });
      // also handle relative imports like ../components/xxx or ./components/xxx if any
      replacers.push({
        oldRegex: new RegExp(`\\.\\./components/${baseName}(?=['"\\s/])`, 'g'),
        newStr: `../components/${dir}/${baseName}`
      });
      replacers.push({
        oldRegex: new RegExp(`\\.\\./\\.\\./components/${baseName}(?=['"\\s/])`, 'g'),
        newStr: `../../components/${dir}/${baseName}`
      });
    }
  });
});

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const {oldRegex, newStr} of replacers) {
        if (oldRegex.test(content)) {
          // Because regex is stateful with 'g', we must reset it or just run replace which handles it
          content = content.replace(oldRegex, newStr);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated imports in', fullPath);
      }
    }
  }
}

processDir(appDir);
processDir(srcDir);
console.log('Done reorganizing components!');
