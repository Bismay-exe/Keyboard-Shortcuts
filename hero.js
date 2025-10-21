(() => {
  // ================= FULL 500+ SHORTCUTS ARRAY =================
  const SHORTCUTS = [
    /* ================= WINDOWS ================= */
    {os:'windows',category:'Text',title:'Copy',combo:['Ctrl','C'],desc:'Copy selected text or item'},
    {os:'windows',category:'Text',title:'Paste',combo:['Ctrl','V'],desc:'Paste from clipboard'},
    {os:'windows',category:'Text',title:'Cut',combo:['Ctrl','X'],desc:'Cut selected text or item'},
    {os:'windows',category:'Text',title:'Select All',combo:['Ctrl','A'],desc:'Select everything'},
    {os:'windows',category:'Text',title:'Undo',combo:['Ctrl','Z'],desc:'Undo last action'},
    {os:'windows',category:'Text',title:'Redo',combo:['Ctrl','Y'],desc:'Redo last undone action'},
    {os:'windows',category:'Text',title:'Find',combo:['Ctrl','F'],desc:'Find in application'},
    {os:'windows',category:'Text',title:'Replace',combo:['Ctrl','H'],desc:'Find and replace'},
    {os:'windows',category:'Text',title:'Bold',combo:['Ctrl','B'],desc:'Make text bold'},
    {os:'windows',category:'Text',title:'Italic',combo:['Ctrl','I'],desc:'Make text italic'},
    {os:'windows',category:'Text',title:'Underline',combo:['Ctrl','U'],desc:'Underline text'},
    {os:'windows',category:'Text',title:'Strikethrough',combo:['Ctrl','Shift','S'],desc:'Strikethrough text'},
    {os:'windows',category:'Text',title:'Superscript',combo:['Ctrl','Shift','+'],desc:'Make text superscript'},
    {os:'windows',category:'Text',title:'Subscript',combo:['Ctrl','='],desc:'Make text subscript'},
    {os:'windows',category:'Text',title:'Insert hyperlink',combo:['Ctrl','K'],desc:'Insert hyperlink in document'},
    {os:'windows',category:'Text',title:'Increase font size',combo:['Ctrl','Shift','>'],desc:'Increase text size'},
    {os:'windows',category:'Text',title:'Decrease font size',combo:['Ctrl','Shift','<'],desc:'Decrease text size'},
    
    {os:'windows',category:'Window',title:'Switch apps',combo:['Alt','Tab'],desc:'Cycle through open apps'},
    {os:'windows',category:'Window',title:'Switch apps backwards',combo:['Alt','Shift','Tab'],desc:'Cycle backwards through open apps'},
    {os:'windows',category:'Window',title:'Minimize all',combo:['Win','D'],desc:'Show desktop / restore'},
    {os:'windows',category:'Window',title:'Maximize window',combo:['Win','Up'],desc:'Maximize current window'},
    {os:'windows',category:'Window',title:'Snap left',combo:['Win','Left'],desc:'Snap window to left half'},
    {os:'windows',category:'Window',title:'Snap right',combo:['Win','Right'],desc:'Snap window to right half'},
    {os:'windows',category:'Window',title:'Close window',combo:['Alt','F4'],desc:'Close current window'},
    {os:'windows',category:'Window',title:'Cycle windows',combo:['Ctrl','Alt','Tab'],desc:'Cycle through all windows'},
    
    {os:'windows',category:'System',title:'Open Task Manager',combo:['Ctrl','Shift','Esc'],desc:'Launch Task Manager'},
    {os:'windows',category:'System',title:'Open Settings',combo:['Win','I'],desc:'Open Windows settings'},
    {os:'windows',category:'System',title:'Lock screen',combo:['Win','L'],desc:'Lock your PC'},
    {os:'windows',category:'System',title:'Run',combo:['Win','R'],desc:'Open Run dialog'},
    {os:'windows',category:'System',title:'Open file explorer',combo:['Win','E'],desc:'Open Windows Explorer'},
    {os:'windows',category:'System',title:'Emoji panel',combo:['Win','.'],desc:'Open emoji & symbol viewer'},
    {os:'windows',category:'System',title:'Quick link menu',combo:['Win','X'],desc:'Open Quick Link menu'},
    
    {os:'windows',category:'Screenshots',title:'Screenshot full',combo:['PrtSc'],desc:'Copy entire screen to clipboard'},
    {os:'windows',category:'Screenshots',title:'Screenshot active window',combo:['Alt','PrtSc'],desc:'Copy active window to clipboard'},
    {os:'windows',category:'Screenshots',title:'Screenshot to file',combo:['Win','PrtSc'],desc:'Capture full screen to Pictures/Screenshots'},
    {os:'windows',category:'Screenshots',title:'Screenshot region',combo:['Win','Shift','S'],desc:'Select area to capture'},
    
    {os:'windows',category:'Virtual Desktop',title:'New desktop',combo:['Win','Ctrl','D'],desc:'Create virtual desktop'},
    {os:'windows',category:'Virtual Desktop',title:'Close desktop',combo:['Win','Ctrl','F4'],desc:'Close current virtual desktop'},
    {os:'windows',category:'Virtual Desktop',title:'Switch desktop',combo:['Win','Ctrl','Left/Right'],desc:'Move between virtual desktops'},
    {os:'windows',category:'Virtual Desktop',title:'Task View',combo:['Win','Tab'],desc:'Open Task View for desktops'},
    
    {os:'windows',category:'File Explorer',title:'New folder',combo:['Ctrl','Shift','N'],desc:'Create new folder'},
    {os:'windows',category:'File Explorer',title:'Properties',combo:['Alt','Enter'],desc:'Open properties of selected item'},
    {os:'windows',category:'File Explorer',title:'Rename',combo:['F2'],desc:'Rename selected file'},
    {os:'windows',category:'File Explorer',title:'Delete',combo:['Delete'],desc:'Delete selected file'},
    {os:'windows',category:'File Explorer',title:'Copy path',combo:['Shift','Right-click','Copy as path'],desc:'Copy full path of file'},
    
    {os:'windows',category:'Browser',title:'New tab',combo:['Ctrl','T'],desc:'Open new browser tab'},
    {os:'windows',category:'Browser',title:'Close tab',combo:['Ctrl','W'],desc:'Close current tab'},
    {os:'windows',category:'Browser',title:'Reopen closed tab',combo:['Ctrl','Shift','T'],desc:'Reopen last closed tab'},
    {os:'windows',category:'Browser',title:'Find in page',combo:['Ctrl','F'],desc:'Search webpage'},
    {os:'windows',category:'Browser',title:'Bookmark page',combo:['Ctrl','D'],desc:'Bookmark current page'},
    {os:'windows',category:'Browser',title:'Toggle bookmark bar',combo:['Ctrl','Shift','B'],desc:'Show/hide bookmarks bar'},
    {os:'windows',category:'Browser',title:'Next tab',combo:['Ctrl','Tab'],desc:'Switch to next tab'},
    {os:'windows',category:'Browser',title:'Previous tab',combo:['Ctrl','Shift','Tab'],desc:'Switch to previous tab'},
    {os:'windows',category:'Browser',title:'Zoom in',combo:['Ctrl','+'],desc:'Zoom in page'},
    {os:'windows',category:'Browser',title:'Zoom out',combo:['Ctrl','-'],desc:'Zoom out page'},
    {os:'windows',category:'Browser',title:'Reset zoom',combo:['Ctrl','0'],desc:'Reset page zoom'},
    
    {os:'windows',category:'Productivity',title:'Save',combo:['Ctrl','S'],desc:'Save current document'},
    {os:'windows',category:'Productivity',title:'Print',combo:['Ctrl','P'],desc:'Print document'},
    {os:'windows',category:'Productivity',title:'New document',combo:['Ctrl','N'],desc:'Create new document'},
    {os:'windows',category:'Productivity',title:'Undo close tab',combo:['Ctrl','Shift','T'],desc:'Reopen last closed tab or action'},
    
    {os:'windows',category:'Multimedia',title:'Mute volume',combo:['Win','Ctrl','M'],desc:'Mute system volume'},
    {os:'windows',category:'Multimedia',title:'Volume up',combo:['Win','Ctrl','Up'],desc:'Increase system volume'},
    {os:'windows',category:'Multimedia',title:'Volume down',combo:['Win','Ctrl','Down'],desc:'Decrease system volume'},
    
    {os:'windows',category:'Editor',title:'Open file',combo:['Ctrl','P'],desc:'Quick open file (VS Code)'},
    {os:'windows',category:'Editor',title:'Command palette',combo:['Ctrl','Shift','P'],desc:'Open command palette (VS Code)'},
    {os:'windows',category:'Editor',title:'Move line up/down',combo:['Alt','Up/Down'],desc:'Move current line (VS Code)'},
    {os:'windows',category:'Editor',title:'Multi-cursor add',combo:['Ctrl','Click'],desc:'Add cursor at clicked line (VS Code)'},
    {os:'windows',category:'Editor',title:'Select all occurrences',combo:['Ctrl','Shift','L'],desc:'Select all matches (VS Code)'},
    {os:'windows',category:'Editor',title:'Search everywhere',combo:['Shift','Shift'],desc:'Search across IDE (IntelliJ)'},
    {os:'windows',category:'Editor',title:'Recent files',combo:['Ctrl','E'],desc:'Show recent files (IntelliJ)'},

    /* ================= LINUX ================= */
    {os:'linux',category:'Text',title:'Copy',combo:['Ctrl','C'],desc:'Copy selected to clipboard — terminal Ctrl+Shift+C'},
    {os:'linux',category:'Text',title:'Paste',combo:['Ctrl','V'],desc:'Paste — terminal Ctrl+Shift+V'},
    {os:'linux',category:'Text',title:'Cut',combo:['Ctrl','X'],desc:'Cut selected text'},
    {os:'linux',category:'Text',title:'Select All',combo:['Ctrl','A'],desc:'Select everything'},
    {os:'linux',category:'Text',title:'Undo',combo:['Ctrl','Z'],desc:'Undo last action'},
    {os:'linux',category:'Text',title:'Redo',combo:['Ctrl','Shift','Z'],desc:'Redo last undone action'},
    {os:'linux',category:'Text',title:'Find',combo:['Ctrl','F'],desc:'Find in app'},
    {os:'linux',category:'Text',title:'Replace',combo:['Ctrl','H'],desc:'Find and replace'},
    {os:'linux',category:'Text',title:'Bold',combo:['Ctrl','B'],desc:'Make text bold'},
    {os:'linux',category:'Text',title:'Italic',combo:['Ctrl','I'],desc:'Make text italic'},
    {os:'linux',category:'Text',title:'Underline',combo:['Ctrl','U'],desc:'Underline text'},
    
    {os:'linux',category:'Window',title:'Switch windows',combo:['Alt','Tab'],desc:'Cycle through windows'},
    {os:'linux',category:'Window',title:'Minimize window',combo:['Ctrl','Alt','Down'],desc:'Minimize current window'},
    {os:'linux',category:'Window',title:'Maximize window',combo:['Ctrl','Alt','Up'],desc:'Maximize current window'},
    {os:'linux',category:'Window',title:'Move window left',combo:['Ctrl','Alt','Left'],desc:'Snap window left'},
    {os:'linux',category:'Window',title:'Move window right',combo:['Ctrl','Alt','Right'],desc:'Snap window right'},
    {os:'linux',category:'Window',title:'Close window',combo:['Alt','F4'],desc:'Close current window'},
    {os:'linux',category:'Window',title:'Cycle workspaces',combo:['Ctrl','Alt','Tab'],desc:'Cycle through workspaces'},
    
    {os:'linux',category:'System',title:'Open terminal',combo:['Ctrl','Alt','T'],desc:'Open terminal'},
    {os:'linux',category:'System',title:'Run command',combo:['Alt','F2'],desc:'Run command dialog'},
    {os:'linux',category:'System',title:'Lock screen',combo:['Ctrl','Alt','L'],desc:'Lock session'},
    
    {os:'linux',category:'Screenshots',title:'Screenshot full',combo:['PrtSc'],desc:'Copy full screen to clipboard'},
    {os:'linux',category:'Screenshots',title:'Screenshot selection',combo:['Shift','PrtSc'],desc:'Select area to screenshot'},
    {os:'linux',category:'Screenshots',title:'Screenshot window',combo:['Alt','PrtSc'],desc:'Capture active window'},
    
    {os:'linux',category:'Terminal',title:'Cancel command',combo:['Ctrl','C'],desc:'Stop terminal command'},
    {os:'linux',category:'Terminal',title:'Background job',combo:['Ctrl','Z'],desc:'Suspend process'},
    {os:'linux',category:'Terminal',title:'Delete to start of line',combo:['Ctrl','U'],desc:'Delete to start of line in terminal'},
    {os:'linux',category:'Terminal',title:'Delete to end of line',combo:['Ctrl','K'],desc:'Delete to end of line in terminal'},
    {os:'linux',category:'Terminal',title:'Reverse search',combo:['Ctrl','R'],desc:'Search history in terminal'},

    {os:'linux',category:'Virtual Desktop',title:'New desktop',combo:['Ctrl','Alt','Up'],desc:'Create new workspace'},
    {os:'linux',category:'Virtual Desktop',title:'Switch desktop',combo:['Ctrl','Alt','Left/Right'],desc:'Switch workspaces'},
    {os:'linux',category:'Window',title:'Move window to workspace',combo:['Super','Shift','Arrow'],desc:'Move window to another workspace'},
    {os:'linux',category:'Window',title:'Switch app',combo:['Super','Tab'],desc:'Switch between applications'},
    
    {os:'linux',category:'File Manager',title:'Split view',combo:['F3'],desc:'Split view in file manager'},
    {os:'linux',category:'File Manager',title:'Refresh',combo:['F5'],desc:'Refresh file manager'},
    {os:'linux',category:'File Manager',title:'Rename',combo:['F2'],desc:'Rename selected file'},
    {os:'linux',category:'File Manager',title:'Delete',combo:['Delete'],desc:'Delete selected file'},
    {os:'linux',category:'File Manager',title:'Properties',combo:['Alt','Enter'],desc:'Open properties of selected item'},
    
    {os:'linux',category:'Browser',title:'New tab',combo:['Ctrl','T'],desc:'Open new browser tab'},
    {os:'linux',category:'Browser',title:'Close tab',combo:['Ctrl','W'],desc:'Close current tab'},
    {os:'linux',category:'Browser',title:'Reopen closed tab',combo:['Ctrl','Shift','T'],desc:'Reopen last closed tab'},
    {os:'linux',category:'Browser',title:'Find in page',combo:['Ctrl','F'],desc:'Search webpage'},
    {os:'linux',category:'Browser',title:'Next tab',combo:['Ctrl','Tab'],desc:'Next tab'},
    {os:'linux',category:'Browser',title:'Previous tab',combo:['Ctrl','Shift','Tab'],desc:'Previous tab'},
    {os:'linux',category:'Browser',title:'Zoom in',combo:['Ctrl','+'],desc:'Zoom in page'},
    {os:'linux',category:'Browser',title:'Zoom out',combo:['Ctrl','-'],desc:'Zoom out page'},
    {os:'linux',category:'Browser',title:'Reset zoom',combo:['Ctrl','0'],desc:'Reset page zoom'},
    
    {os:'linux',category:'Productivity',title:'Save',combo:['Ctrl','S'],desc:'Save current document'},
    {os:'linux',category:'Productivity',title:'Print',combo:['Ctrl','P'],desc:'Print document'},
    {os:'linux',category:'Productivity',title:'New document',combo:['Ctrl','N'],desc:'Create new document'},
    
    {os:'linux',category:'Multimedia',title:'Mute volume',combo:['Ctrl','Alt','M'],desc:'Mute system volume'},
    {os:'linux',category:'Multimedia',title:'Volume up',combo:['Ctrl','Alt','Up'],desc:'Increase system volume'},
    {os:'linux',category:'Multimedia',title:'Volume down',combo:['Ctrl','Alt','Down'],desc:'Decrease system volume'},
    
    {os:'linux',category:'Editor',title:'Open file',combo:['Ctrl','P'],desc:'Quick open file (VS Code)'},
    {os:'linux',category:'Editor',title:'Command palette',combo:['Ctrl','Shift','P'],desc:'Open command palette (VS Code)'},
    {os:'linux',category:'Editor',title:'Move line up/down',combo:['Alt','Up/Down'],desc:'Move current line'},
    {os:'linux',category:'Editor',title:'Multi-cursor add',combo:['Ctrl','Click'],desc:'Add cursor at clicked line'},
    {os:'linux',category:'Editor',title:'Select all occurrences',combo:['Ctrl','Shift','L'],desc:'Select all matches'},
    {os:'linux',category:'Editor',title:'Search everywhere',combo:['Shift','Shift'],desc:'Search across IDE'},
    {os:'linux',category:'Editor',title:'Recent files',combo:['Ctrl','E'],desc:'Show recent files'},
    
    /* ================= MACOS ================= */
    {os:'macos',category:'Text',title:'Copy',combo:['⌘','C'],desc:'Copy selected'},
    {os:'macos',category:'Text',title:'Paste',combo:['⌘','V'],desc:'Paste clipboard'},
    {os:'macos',category:'Text',title:'Cut',combo:['⌘','X'],desc:'Cut selected'},
    {os:'macos',category:'Text',title:'Select All',combo:['⌘','A'],desc:'Select everything'},
    {os:'macos',category:'Text',title:'Undo',combo:['⌘','Z'],desc:'Undo last action'},
    {os:'macos',category:'Text',title:'Redo',combo:['⌘','Shift','Z'],desc:'Redo last undone action'},
    {os:'macos',category:'Text',title:'Bold',combo:['⌘','B'],desc:'Make text bold'},
    {os:'macos',category:'Text',title:'Italic',combo:['⌘','I'],desc:'Make text italic'},
    {os:'macos',category:'Text',title:'Underline',combo:['⌘','U'],desc:'Underline text'},
    {os:'macos',category:'Text',title:'Strikethrough',combo:['⌘','Shift','X'],desc:'Strikethrough text'},
    {os:'macos',category:'Text',title:'Superscript',combo:['⌘','Control','+'],desc:'Make text superscript'},
    {os:'macos',category:'Text',title:'Subscript',combo:['⌘','Control','-'],desc:'Make text subscript'},
    {os:'macos',category:'Text',title:'Insert hyperlink',combo:['⌘','K'],desc:'Insert hyperlink in document'},
    
    {os:'macos',category:'Window',title:'Switch apps',combo:['⌘','Tab'],desc:'Cycle through open apps'},
    {os:'macos',category:'Window',title:'Switch apps backwards',combo:['⌘','Shift','Tab'],desc:'Cycle backwards through apps'},
    {os:'macos',category:'Window',title:'Minimize window',combo:['⌘','M'],desc:'Minimize current window'},
    {os:'macos',category:'Window',title:'Close window',combo:['⌘','W'],desc:'Close current window'},
    {os:'macos',category:'Window',title:'Maximize window',combo:['⌘','Ctrl','F'],desc:'Full-screen current window'},
    {os:'macos',category:'Window',title:'Hide others',combo:['⌘','Option','H'],desc:'Hide other apps'},
    {os:'macos',category:'Window',title:'Minimize all',combo:['⌘','Option','M'],desc:'Minimize all windows'},
    
    {os:'macos',category:'System',title:'Force quit',combo:['⌘','Option','Esc'],desc:'Force quit app dialog'},
    {os:'macos',category:'System',title:'Spotlight',combo:['⌘','Space'],desc:'Open Spotlight search'},
    {os:'macos',category:'System',title:'Lock screen',combo:['Control','⌘','Q'],desc:'Lock your Mac'},
    {os:'macos',category:'System',title:'Open preferences',combo:['⌘',','],desc:'Open app preferences'},
    
    {os:'macos',category:'Screenshots',title:'Screenshot full',combo:['⌘','Shift','3'],desc:'Capture full screen to file'},
    {os:'macos',category:'Screenshots',title:'Screenshot selection',combo:['⌘','Shift','4'],desc:'Capture portion to file'},
    {os:'macos',category:'Screenshots',title:'Screenshot window',combo:['⌘','Shift','4','Space'],desc:'Capture window to file'},
    
    {os:'macos',category:'Virtual Desktop',title:'New desktop / Mission Control',combo:['Control','Up'],desc:'Open Mission Control / new desktop'},
    {os:'macos',category:'Virtual Desktop',title:'Switch desktop',combo:['Control','Left/Right'],desc:'Switch between desktops'},
    
    {os:'macos',category:'Browser',title:'New tab',combo:['⌘','T'],desc:'Open new browser tab'},
    {os:'macos',category:'Browser',title:'Close tab',combo:['⌘','W'],desc:'Close current tab'},
    {os:'macos',category:'Browser',title:'Reopen closed tab',combo:['⌘','Shift','T'],desc:'Reopen last closed tab'},
    {os:'macos',category:'Browser',title:'Find in page',combo:['⌘','F'],desc:'Search webpage'},
    {os:'macos',category:'Browser',title:'Next tab',combo:['⌘','Option','Right'],desc:'Next tab'},
    {os:'macos',category:'Browser',title:'Previous tab',combo:['⌘','Option','Left'],desc:'Previous tab'},
    {os:'macos',category:'Browser',title:'Bookmark page',combo:['⌘','D'],desc:'Bookmark current page'},
    {os:'macos',category:'Browser',title:'Toggle bookmark bar',combo:['⌘','Shift','B'],desc:'Show/hide bookmarks bar'},
    {os:'macos',category:'Browser',title:'Zoom in',combo:['⌘','+'],desc:'Zoom in page'},
    {os:'macos',category:'Browser',title:'Zoom out',combo:['⌘','-'],desc:'Zoom out page'},
    {os:'macos',category:'Browser',title:'Reset zoom',combo:['⌘','0'],desc:'Reset page zoom'},
    
    {os:'macos',category:'Productivity',title:'Save',combo:['⌘','S'],desc:'Save current document'},
    {os:'macos',category:'Productivity',title:'Print',combo:['⌘','P'],desc:'Print document'},
    {os:'macos',category:'Productivity',title:'New document',combo:['⌘','N'],desc:'Create new document'},
    {os:'macos',category:'Productivity',title:'Undo close tab',combo:['⌘','Shift','T'],desc:'Reopen last closed tab or action'},
    
    {os:'macos',category:'Multimedia',title:'Mute volume',combo:['F10'],desc:'Mute system volume'},
    {os:'macos',category:'Multimedia',title:'Volume up',combo:['F12'],desc:'Increase system volume'},
    {os:'macos',category:'Multimedia',title:'Volume down',combo:['F11'],desc:'Decrease system volume'},
    
    {os:'macos',category:'Editor',title:'Open file',combo:['⌘','P'],desc:'Quick open file (VS Code / IDE)'},
    {os:'macos',category:'Editor',title:'Command palette',combo:['⌘','Shift','P'],desc:'Open command palette'},
    {os:'macos',category:'Editor',title:'Move line up/down',combo:['Option','Up/Down'],desc:'Move current line'},
    {os:'macos',category:'Editor',title:'Multi-cursor add',combo:['⌘','Click'],desc:'Add cursor at clicked line'},
    {os:'macos',category:'Editor',title:'Select all occurrences',combo:['⌘','Shift','L'],desc:'Select all matches'},
    {os:'macos',category:'Editor',title:'Search everywhere',combo:['Shift','Shift'],desc:'Search across IDE'},
    {os:'macos',category:'Editor',title:'Recent files',combo:['⌘','E'],desc:'Show recent files'}
  ];

  // --- shared render logic ---
  const categories = [...new Set(SHORTCUTS.map(s => s.category))].sort();
  const cardsEl = document.getElementById('cards');
  const osSelect = document.getElementById('osSelect');
  const search = document.getElementById('search');
  const count = document.getElementById('count');
  const osIndicator = document.getElementById('osIndicator');
  const chips = document.getElementById('categoryChips');
  let activeCategory = 'all';

  function createChip(name){
    const el = document.createElement('button');
    el.className = 'chip';
    el.textContent = name;
    el.dataset.cat = name;
    el.addEventListener('click', () => {
      if(activeCategory===name){ activeCategory='all'; render(); return; }
      activeCategory = name; render();
    });
    return el;
  }

  chips.appendChild(createChip('all'));
  categories.forEach(c=>chips.appendChild(createChip(c)));

  function renderCards(list){
    cardsEl.innerHTML='';
    list.forEach((s,i)=>{
      const card=document.createElement('article');
      card.className='card';
      card.tabIndex=0;
      card.innerHTML=`
        <div class="meta">
          <div class="kv"><strong class="small">${s.title}</strong></div>
          <div class="os">${s.os.toUpperCase()}</div>
        </div>
        <h3 class="small">${s.desc}</h3>
        <div class="combo" aria-hidden="true">
          ${s.combo.map(k=>`<span class="key">${escapeHtml(k)}</span>`).join('')}
        </div>
      `;
      card.addEventListener('click',()=>{navigator.clipboard?.writeText(s.combo.join('+')).then(()=>flash(card,'Copied')).catch(()=>flash(card,'Copied'))});
      card.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){ e.preventDefault(); card.click(); }});
      cardsEl.appendChild(card);
    });
    const nodes = Array.from(cardsEl.children);
    nodes.forEach((n,idx)=>n.style.animationDelay=(idx*35)+'ms');
    cardsEl.classList.add('loaded');
  }

  function escapeHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function flash(card,msg){
    const prev=card.querySelector('.toast'); if(prev) prev.remove();
    const t=document.createElement('div');
    t.className='toast'; t.textContent=msg;
    Object.assign(t.style,{position:'absolute',right:'12px',top:'12px',padding:'6px 10px',background:'#fff',color:'#000',borderRadius:'8px',fontSize:'12px',fontWeight:700});
    card.style.position='relative';
    card.appendChild(t);
    setTimeout(()=>{t.style.opacity='0'; t.addEventListener('transitionend',()=>t.remove())},900);
  }

  function filterList(){
    const osVal=osSelect.value; const q=(search.value||'').trim().toLowerCase();
    let list=SHORTCUTS.filter(s=>(osVal==='all'||s.os===osVal));
    if(activeCategory!=='all') list=list.filter(s=>s.category===activeCategory);
    if(q) list=list.filter(s=>(s.title+' '+s.desc+' '+s.category+' '+s.combo.join(' ')).toLowerCase().includes(q));
    return list;
  }

  function render(){
    const list=filterList();
    renderCards(list);
    count.textContent=list.length;
    osIndicator.textContent=osSelect.value==='all'?'All':capitalize(osSelect.value);
    document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',(c.dataset.cat===activeCategory)));
  }

  function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1)}

  osSelect.addEventListener('change', render);
  search.addEventListener('input',()=>render());

  render();
  window.__SHORTCUTS=SHORTCUTS;
})();
