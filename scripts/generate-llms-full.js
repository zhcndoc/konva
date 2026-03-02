#!/usr/bin/env node

/**
 * Generates static/llms-full.txt from docs.json and static/llms.txt
 *
 * Each Konva class only lists its OWN methods (not inherited),
 * so the output stays manageable despite the large API surface.
 *
 * Run: node scripts/generate-llms-full.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS_PATH = path.join(ROOT, 'docs.json');
const LLMS_TXT_PATH = path.join(ROOT, 'static', 'llms.txt');
const OUTPUT_PATH = path.join(ROOT, 'static', 'llms-full.txt');

function formatParams(params) {
  if (!params || params.length === 0) return '';
  return params
    .map((p) => {
      const type = p.type ? p.type.names.join(' | ') : 'any';
      const opt = p.optional ? '?' : '';
      return `${p.name}${opt}: ${type}`;
    })
    .join(', ');
}

function formatReturns(returns) {
  if (!returns || returns.length === 0) return '';
  return returns
    .map((r) => (r.type ? r.type.names.join(' | ') : 'any'))
    .join(' | ');
}

function formatMethod(m) {
  const params = formatParams(m.params);
  const ret = formatReturns(m.returns);
  const desc = m.description ? ` — ${m.description.replace(/\n/g, ' ').trim()}` : '';
  const retStr = ret ? ` → ${ret}` : '';
  return `  ${m.name}(${params})${retStr}${desc}`;
}

function formatConstructorParams(params) {
  if (!params || params.length === 0) return '';

  // Filter to only top-level config params (not nested like config.x)
  // and the config object itself
  const topLevel = params.filter(
    (p) => p.name && !p.name.includes('.')
  );
  const nested = params.filter(
    (p) => p.name && p.name.includes('.')
  );

  if (topLevel.length === 0 && nested.length === 0) return '';

  let lines = [];

  // Show key config properties (the nested ones like config.x, config.y)
  const configParams = nested.map((p) => {
    const name = p.name.replace('config.', '');
    const type = p.type ? p.type.names.join(' | ') : 'any';
    const opt = p.optional ? ' (optional)' : '';
    const desc = p.description ? ` — ${p.description.replace(/\n/g, ' ').trim()}` : '';
    return `    ${name}: ${type}${opt}${desc}`;
  });

  if (configParams.length > 0) {
    lines.push('  Constructor config:');
    lines.push(...configParams);
  }

  return lines.join('\n');
}

function formatProperty(p) {
  const type = p.type ? p.type.names.join(' | ') : 'any';
  const desc = p.description ? ` — ${p.description.replace(/\n/g, ' ').trim()}` : '';
  const def = p.defaultvalue !== undefined ? ` (default: ${p.defaultvalue})` : '';
  return `  ${p.name}: ${type}${def}${desc}`;
}

function main() {
  // Read inputs
  const docs = JSON.parse(fs.readFileSync(DOCS_PATH, 'utf-8'));
  const llmsTxt = fs.readFileSync(LLMS_TXT_PATH, 'utf-8');

  const lines = [];

  // Start with the curated llms.txt content
  lines.push(llmsTxt.trim());
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('# Full API Reference');
  lines.push('');

  // Process the Konva namespace first (static methods and properties)
  const konvaNs = docs['Konva'];
  if (konvaNs) {
    lines.push('## Konva (namespace)');
    lines.push('');

    if (konvaNs.properties && konvaNs.properties.length > 0) {
      lines.push('### Static Properties');
      for (const p of konvaNs.properties) {
        lines.push(formatProperty(p));
      }
      lines.push('');
    }

    if (konvaNs.methods && konvaNs.methods.length > 0) {
      lines.push('### Static Methods');
      for (const m of konvaNs.methods) {
        lines.push(formatMethod(m));
      }
      lines.push('');
    }

    if (konvaNs.classes) {
      lines.push(`### Classes: ${konvaNs.classes.join(', ')}`);
      lines.push('');
    }

    if (konvaNs.namespaces) {
      lines.push(`### Namespaces: ${konvaNs.namespaces.join(', ')}`);
      lines.push('');
    }
  }

  // Desired order: base classes first, then shapes
  const classOrder = [
    'Konva.Node',
    'Konva.Container',
    'Konva.Stage',
    'Konva.Layer',
    'Konva.FastLayer',
    'Konva.Group',
    'Konva.Shape',
    'Konva.Rect',
    'Konva.Circle',
    'Konva.Ellipse',
    'Konva.Line',
    'Konva.Arrow',
    'Konva.Arc',
    'Konva.Ring',
    'Konva.Wedge',
    'Konva.Star',
    'Konva.RegularPolygon',
    'Konva.Path',
    'Konva.Text',
    'Konva.TextPath',
    'Konva.Image',
    'Konva.Sprite',
    'Konva.Label',
    'Konva.Tag',
    'Konva.Transformer',
    'Konva.Animation',
    'Konva.Tween',
    'Konva.Canvas',
    'Konva.Context',
    'Konva.Transform',
  ];

  // Namespaces are handled separately at the end — exclude them from class processing
  const namespaceKeys = new Set(konvaNs?.namespaces || []);

  // Collect any classes not in the explicit order
  const allClassKeys = Object.keys(docs).filter(
    (k) => k !== 'Konva' && k.startsWith('Konva.') && !namespaceKeys.has(k)
  );
  const remaining = allClassKeys.filter((k) => !classOrder.includes(k));
  const orderedKeys = [
    ...classOrder.filter((k) => docs[k] && !namespaceKeys.has(k)),
    ...remaining,
  ];

  // Process each class
  for (const key of orderedKeys) {
    const cls = docs[key];
    if (!cls) continue;

    const name = cls.name || key.replace('Konva.', '');
    const extendsStr = cls.augments ? ` extends ${cls.augments.join(', ')}` : '';
    const desc = cls.classdesc || cls.description || '';

    lines.push(`## ${key}${extendsStr}`);
    if (desc) {
      lines.push('');
      lines.push(desc.replace(/\n/g, ' ').trim());
    }
    lines.push('');

    // Constructor params (only for classes with config-style params)
    const ctorParams = formatConstructorParams(cls.params);
    if (ctorParams) {
      lines.push(ctorParams);
      lines.push('');
    }

    // Methods
    if (cls.methods && cls.methods.length > 0) {
      // Separate getter/setter properties from real methods
      const realMethods = [];
      const getSetters = [];

      for (const m of cls.methods) {
        // Heuristic: if description starts with "get/set" or "get " or "set ",
        // it's a getter/setter property
        const d = (m.description || '').toLowerCase();
        if (d.startsWith('get/set') || d.startsWith('get ') || d.startsWith('set ')) {
          getSetters.push(m);
        } else {
          realMethods.push(m);
        }
      }

      if (getSetters.length > 0) {
        lines.push('### Properties (getter/setter)');
        for (const m of getSetters) {
          const type = m.returns
            ? m.returns.map((r) => r.type?.names?.join(' | ')).join(' | ')
            : m.params?.[0]?.type?.names?.join(' | ') || 'any';
          const desc = m.description ? ` — ${m.description.replace(/\n/g, ' ').trim()}` : '';
          lines.push(`  ${m.name}: ${type}${desc}`);
        }
        lines.push('');
      }

      if (realMethods.length > 0) {
        lines.push('### Methods');
        for (const m of realMethods) {
          lines.push(formatMethod(m));
        }
        lines.push('');
      }
    }

    // Examples (only include first example if present)
    if (cls.examples && cls.examples.length > 0) {
      lines.push('### Example');
      lines.push('```javascript');
      lines.push(cls.examples[0].trim());
      lines.push('```');
      lines.push('');
    }
  }

  // Process namespaces (Konva.Util, Konva.Easings, Konva.Filters)
  for (const nsName of konvaNs?.namespaces || []) {
    const ns = docs[nsName];
    if (!ns) continue;

    lines.push(`## ${nsName}`);
    const desc = ns.description || '';
    if (desc) {
      lines.push('');
      lines.push(desc.replace(/\n/g, ' ').trim());
    }
    lines.push('');

    if (ns.methods && ns.methods.length > 0) {
      lines.push('### Methods');
      for (const m of ns.methods) {
        lines.push(formatMethod(m));
      }
      lines.push('');
    }

    if (ns.properties && ns.properties.length > 0) {
      lines.push('### Properties');
      for (const p of ns.properties) {
        lines.push(formatProperty(p));
      }
      lines.push('');
    }
  }

  // Write output
  const output = lines.join('\n');
  fs.writeFileSync(OUTPUT_PATH, output, 'utf-8');

  const sizeKB = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1);
  console.log(`Generated ${OUTPUT_PATH} (${sizeKB} KB)`);
}

main();
