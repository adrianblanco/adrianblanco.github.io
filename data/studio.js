// Parses STUDIO_MD (defined in studio-data.js) into the STUDIO object
//
// Format:
//   # Section [| Optional section description]
//   ## Category [| Optional category description]   (toolkit only)
//   ### Name | URL | tag1, tag2 [| Author | Year]   (| Year optional for library)
//   Any other line → description for the current entry
//
// Section keys: toolkit, library, print, corners

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseStudioMD(md) {
  const result = {
    toolkit: [],
    library: [],
    print:   [],
    corners: [],
    _meta: {
      sections:   {},
      categories: {}
    }
  };

  const sectionMap = {
    'tools':                 'toolkit',
    'library':               'library',
    'print and ink':         'print',
    'corners of the internet': 'corners'
  };

  let section  = null;
  let category = null;
  let current  = null;

  function pushCurrent() {
    if (!current || !section || !result[section]) return;
    current.description = current.description.trim();
    result[section].push(current);
    current = null;
  }

  for (const raw of md.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith('# ')) {
      pushCurrent();
      const parts = line.slice(2).split('|').map(p => p.trim());
      const key   = parts[0].toLowerCase();
      section     = sectionMap[key] || null;
      category    = null;
      if (section && parts[1]) result._meta.sections[section] = parts[1];

    } else if (line.startsWith('## ')) {
      pushCurrent();
      const parts = line.slice(3).split('|').map(p => p.trim());
      category = parts[0];
      if (parts[1]) result._meta.categories[category] = parts[1];

    } else if (line.startsWith('### ')) {
      pushCurrent();
      const parts = line.slice(4).split('|').map(p => p.trim());
      current = {
        id:          slugify(parts[0]),
        name:        parts[0],
        url:         parts[1] || '',
        tags:        parts[2] ? parts[2].split(',').map(t => t.trim()) : [],
        description: ''
      };
      if (section === 'toolkit') current.category = category || '';
      if (section === 'library') {
        current.author = parts[3] || '';
        current.year   = parts[4] ? parseInt(parts[4]) : '';
      }

    } else if (current) {
      current.description += (current.description ? ' ' : '') + line;
    }
  }
  pushCurrent();
  return result;
}

const STUDIO = parseStudioMD(STUDIO_MD);
