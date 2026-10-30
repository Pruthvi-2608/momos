import js from '@eslint/js';
import globals from 'globals';
export default [{ignores:['dist/**','node_modules/**','test-results/**']},js.configs.recommended,{files:['scripts/*.mjs','*.js'],languageOptions:{globals:{...globals.node,WebSocket:'readonly'}}}];
