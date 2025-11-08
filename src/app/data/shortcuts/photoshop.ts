import { Shortcut } from "./types";

export const PHOTOSHOP_SHORTCUTS: Shortcut[] = [
  /* ============== GENERAL ============== */
  {os:'photoshop',category:'General',title:'New Document',combo:['Ctrl','N'],desc:'Create new canvas'},
  {os:'photoshop',category:'General',title:'Open File',combo:['Ctrl','O'],desc:'Open file'},
  {os:'photoshop',category:'General',title:'Save',combo:['Ctrl','S'],desc:'Save file'},
  {os:'photoshop',category:'General',title:'Save As',combo:['Ctrl','Shift','S'],desc:'Save copy'},
  {os:'photoshop',category:'General',title:'Close Document',combo:['Ctrl','W'],desc:'Close current file'},

  /* ============== TOOLS ============== */
  {os:'photoshop',category:'Tools',title:'Move Tool',combo:['V'],desc:'Move objects/layers'},
  {os:'photoshop',category:'Tools',title:'Marquee Tool',combo:['M'],desc:'Rectangular/elliptical selection'},
  {os:'photoshop',category:'Tools',title:'Lasso Tool',combo:['L'],desc:'Freehand polygonal selection'},
  {os:'photoshop',category:'Tools',title:'Quick Select / Magic Wand',combo:['W'],desc:'Quick select or wand tool'},
  {os:'photoshop',category:'Tools',title:'Crop Tool',combo:['C'],desc:'Crop canvas'},
  {os:'photoshop',category:'Tools',title:'Eyedropper',combo:['I'],desc:'Pick color'},
  {os:'photoshop',category:'Tools',title:'Brush Tool',combo:['B'],desc:'Paint brush'},
  {os:'photoshop',category:'Tools',title:'Eraser',combo:['E'],desc:'Erase pixels'},
  {os:'photoshop',category:'Tools',title:'Gradient / Paint Bucket',combo:['G'],desc:'Gradient or fill area'},
  {os:'photoshop',category:'Tools',title:'Pen Tool',combo:['P'],desc:'Pen/vector path'},
  {os:'photoshop',category:'Tools',title:'Type Tool',combo:['T'],desc:'Text tool'},
  {os:'photoshop',category:'Tools',title:'Hand Tool',combo:['Space'],desc:'Pan canvas'},
  {os:'photoshop',category:'Tools',title:'Zoom Tool',combo:['Z'],desc:'Zoom view'},

  /* ============== SELECTION ============== */
  {os:'photoshop',category:'Select',title:'Select All',combo:['Ctrl','A'],desc:'Select all pixels'},
  {os:'photoshop',category:'Select',title:'Deselect',combo:['Ctrl','D'],desc:'Clear selection'},
  {os:'photoshop',category:'Select',title:'Reselect',combo:['Ctrl','Shift','D'],desc:'Reapply last selection'},
  {os:'photoshop',category:'Select',title:'Inverse Selection',combo:['Ctrl','Shift','I'],desc:'Invert selection'},

  /* ============== LAYERS ============== */
  {os:'photoshop',category:'Layers',title:'New Layer',combo:['Ctrl','Shift','N'],desc:'Create new layer'},
  {os:'photoshop',category:'Layers',title:'Duplicate Layer',combo:['Ctrl','J'],desc:'Duplicate current layer'},
  {os:'photoshop',category:'Layers',title:'Merge Layers',combo:['Ctrl','E'],desc:'Merge selected layers'},
  {os:'photoshop',category:'Layers',title:'Merge Visible',combo:['Ctrl','Shift','E'],desc:'Merge all visible layers'},
  {os:'photoshop',category:'Layers',title:'Bring Forward',combo:['Ctrl',']'],desc:'Bring layer forward'},
  {os:'photoshop',category:'Layers',title:'Send Backward',combo:['Ctrl','['],desc:'Send layer backward'},
  {os:'photoshop',category:'Layers',title:'Bring to Front',combo:['Ctrl','Shift',']'],desc:'Move layer to top'},
  {os:'photoshop',category:'Layers',title:'Send to Back',combo:['Ctrl','Shift','['],desc:'Move layer to bottom'},
  {os:'photoshop',category:'Layers',title:'Group Layers',combo:['Ctrl','G'],desc:'Group selected layers'},
  {os:'photoshop',category:'Layers',title:'Ungroup',combo:['Ctrl','Shift','G'],desc:'Ungroup layers'},

  /* ============== TRANSFORM ============== */
  {os:'photoshop',category:'Transform',title:'Free Transform',combo:['Ctrl','T'],desc:'Scale/rotate/skew'},
  {os:'photoshop',category:'Transform',title:'Reset Transform Box',combo:['Ctrl','Alt','T'],desc:'Repeat free transform'},

  /* ============== BLENDING / MASKING ============== */
  {os:'photoshop',category:'Blend',title:'New Mask',combo:['Alt','Click Mask Icon'],desc:'Add layer mask'},
  {os:'photoshop',category:'Blend',title:'Clipping Mask',combo:['Ctrl','Alt','G'],desc:'Clip layer to below'},

  /* ============== VIEW ============== */
  {os:'photoshop',category:'View',title:'Zoom In',combo:['Ctrl','+'],desc:'Zoom in'},
  {os:'photoshop',category:'View',title:'Zoom Out',combo:['Ctrl','-'],desc:'Zoom out'},
  {os:'photoshop',category:'View',title:'Fit to Screen',combo:['Ctrl','0'],desc:'Fit canvas to view'},
  {os:'photoshop',category:'View',title:'Actual Pixels',combo:['Ctrl','1'],desc:'100% zoom level'},

  /* ============== BRUSH CONTROL ============== */
  {os:'photoshop',category:'Brush',title:'Increase Brush Size',combo:[']'],desc:'Make brush bigger'},
  {os:'photoshop',category:'Brush',title:'Decrease Brush Size',combo:['['],desc:'Make brush smaller'},
  {os:'photoshop',category:'Brush',title:'Eyedropper Shortcut',combo:['Alt'],desc:'Hold to pick color'},
  {os:'photoshop',category:'Brush',title:'Switch FG/BG Color',combo:['X'],desc:'Swap foreground/background'},
  {os:'photoshop',category:'Brush',title:'Reset Colors',combo:['D'],desc:'Default colors (black/white)'},
];
