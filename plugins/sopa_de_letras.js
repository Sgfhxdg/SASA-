//CREADO POR @gata_dios
// EL CÓDIGO ESTARÁ OFUSCADO HASTA QUE SE COMPRUEBE QUE NO EXISTA ERRORES

// SOPA DE LETRAS (BETA)
(function(_0x3d6c9e,_0x3c9c61){const _0x3a7620=_0x1c64,_0x4cd5a7=_0x3d6c9e();while(!![]){try{const _0x7e97de=parseInt(_0x3a7620(0x183))/0x1+-parseInt(_0x3a7620(0x18a))/0x2*(parseInt(_0x3a7620(0x181))/0x3)+-parseInt(_0x3a7620(0x178))/0x4+parseInt(_0x3a7620(0x177))/0x5*(-parseInt(_0x3a7620(0x196))/0x6)+parseInt(_0x3a7620(0x1aa))/0x7+parseInt(_0x3a7620(0x195))/0x8*(parseInt(_0x3a7620(0x17a))/0x9)+-parseInt(_0x3a7620(0x19d))/0xa*(-parseInt(_0x3a7620(0x19f))/0xb);if(_0x7e97de===_0x3c9c61)break;else _0x4cd5a7['push'](_0x4cd5a7['shift']());}catch(_0x56319f){_0x4cd5a7['push'](_0x4cd5a7['shift']());}}}(_0x3e6a,0xd108c));function _0x1c64(_0x4a436d,_0x407bf7){const _0x3e6a8f=_0x3e6a();return _0x1c64=function(_0x1c64fd,_0x551994){_0x1c64fd=_0x1c64fd-0x170;let _0x1c05a8=_0x3e6a8f[_0x1c64fd];return _0x1c05a8;},_0x1c64(_0x4a436d,_0x407bf7);}let fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,handler=async(_0xe89eef,{conn:_0x30f7c7,text:_0x5d4433,usedPrefix:_0x5d1cf7,command:_0x44912d})=>{const _0x3c3069=_0x1c64;userSP===null&&(userSP=_0xe89eef[_0x3c3069(0x173)][_0x3c3069(0x174)]('@')[0x0],await _0x30f7c7[_0x3c3069(0x198)](_0xe89eef['chat'],'*@'+_0xe89eef['sender'][_0x3c3069(0x174)]('@')[0x0]+_0x3c3069(0x182),_0xe89eef,{'mentions':[_0xe89eef['sender']]}));async function _0x2cd5df(){const _0x2c71e6=_0x3c3069,_0x5459ba=0x10;let _0x3ba0de=new Array(_0x5459ba);for(let _0x3dfd6f=0x0;_0x3dfd6f<_0x5459ba;_0x3dfd6f++){_0x3ba0de[_0x3dfd6f]=new Array(_0x5459ba);}const _0x1151b7=[_0x2c71e6(0x172),_0x2c71e6(0x1a2),'WHATSAPP',_0x2c71e6(0x18d),_0x2c71e6(0x1ab),_0x2c71e6(0x19c),_0x2c71e6(0x18c),'CARRO',_0x2c71e6(0x194),'ROBOT','CELULAR',_0x2c71e6(0x1a6),_0x2c71e6(0x1ac),_0x2c71e6(0x185),'MUEBLES'],_0x4c8be2=_0x1151b7[Math[_0x2c71e6(0x18e)](Math[_0x2c71e6(0x1a3)]()*_0x1151b7[_0x2c71e6(0x175)])];let _0x4454d1=Math[_0x2c71e6(0x18e)](Math['random']()*_0x5459ba),_0x110955=Math[_0x2c71e6(0x18e)](Math[_0x2c71e6(0x1a3)]()*_0x5459ba);const _0x2ea642=[_0x2c71e6(0x176),_0x2c71e6(0x186),_0x2c71e6(0x170),_0x2c71e6(0x188)],_0x10e6b0=_0x2ea642[Math[_0x2c71e6(0x18e)](Math['random']()*_0x2ea642['length'])];let _0x131199=![];while(!_0x131199){_0x4454d1=Math['floor'](Math[_0x2c71e6(0x1a3)]()*_0x5459ba),_0x110955=Math['floor'](Math[_0x2c71e6(0x1a3)]()*_0x5459ba);let _0x130e12=!![];for(let _0xe515d6=0x0;_0xe515d6<_0x4c8be2['length'];_0xe515d6++){if(_0x10e6b0===_0x2c71e6(0x176)&&_0x110955+_0xe515d6>=_0x5459ba){_0x130e12=![];break;}else{if(_0x10e6b0==='vertical'&&_0x4454d1+_0xe515d6>=_0x5459ba){_0x130e12=![];break;}else{if(_0x10e6b0===_0x2c71e6(0x170)&&(_0x4454d1+_0xe515d6>=_0x5459ba||_0x110955+_0xe515d6>=_0x5459ba)){_0x130e12=![];break;}else{if(_0x10e6b0===_0x2c71e6(0x188)&&(_0x4454d1+_0xe515d6>=_0x5459ba||_0x110955-_0xe515d6<0x0)){_0x130e12=![];break;}}}}}if(_0x130e12){for(let _0x1d5f99=0x0;_0x1d5f99<_0x4c8be2[_0x2c71e6(0x175)];_0x1d5f99++){if(_0x10e6b0===_0x2c71e6(0x176))_0x3ba0de[_0x4454d1][_0x110955+_0x1d5f99]=_0x4c8be2[_0x2c71e6(0x180)](_0x1d5f99);else{if(_0x10e6b0===_0x2c71e6(0x186))_0x3ba0de[_0x4454d1+_0x1d5f99][_0x110955]=_0x4c8be2[_0x2c71e6(0x180)](_0x1d5f99);else _0x10e6b0==='diagonalDerecha'?_0x3ba0de[_0x4454d1+_0x1d5f99][_0x110955+_0x1d5f99]=_0x4c8be2[_0x2c71e6(0x180)](_0x1d5f99):_0x3ba0de[_0x4454d1+_0x1d5f99][_0x110955-_0x1d5f99]=_0x4c8be2['charAt'](_0x1d5f99);}}_0x131199=!![];}}const _0x1f4c25='ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',_0x2024c8=['⓿','❶','❷','❸','❹','❺','❻','❼','❽','❾','❿','⓫','⓬','⓭','⓮','⓯','⓰','⓱','⓲','⓳','⓴'];let _0x468712='';_0x468712+=_0x2c71e6(0x19b)+[...Array(_0x5459ba)[_0x2c71e6(0x19e)]()][_0x2c71e6(0x1a1)](_0x5b9f49=>_0x2024c8[_0x5b9f49])[_0x2c71e6(0x187)]('\x20')+'\x0a';for(let _0x4aa5f9=0x0;_0x4aa5f9<_0x5459ba;_0x4aa5f9++){let _0xdd5a87=_0x2024c8[_0x4aa5f9]+'\x20';for(let _0x4cc0f5=0x0;_0x4cc0f5<_0x5459ba;_0x4cc0f5++){if(_0x3ba0de[_0x4aa5f9][_0x4cc0f5])_0xdd5a87+=_0x3ba0de[_0x4aa5f9][_0x4cc0f5]+'\x20';else{let _0x128963=_0x1f4c25[_0x2c71e6(0x180)](Math[_0x2c71e6(0x18e)](Math[_0x2c71e6(0x1a3)]()*_0x1f4c25[_0x2c71e6(0x175)]));_0xdd5a87+=_0x128963+'\x20';}}_0xdd5a87+='',_0x468712+=_0xdd5a87+'\x0a';}_0x468712=_0x468712['replace'](/[a-zA-Z]/g,_0x29c7ad=>_0x1f4c25[_0x29c7ad[_0x2c71e6(0x1a4)]()-0x41]||_0x29c7ad),await _0xe89eef[_0x2c71e6(0x198)]((_0x2c71e6(0x18b)+_0x4c8be2+_0x2c71e6(0x17f)+_0x4c8be2['charAt'](0x0)+'\x22_\x20DE\x20LA\x20PALABRA\x20_\x22'+_0x4c8be2+_0x2c71e6(0x17d)+intentos+_0x2c71e6(0x199)+(_0x5d1cf7+_0x44912d)+_0x2c71e6(0x189)+_0x4c8be2+'\x22_\x20ESTA\x20EN\x20LA\x20FILA\x20'+_0x4454d1+_0x2c71e6(0x197)+_0x110955+'*')[_0x2c71e6(0x184)]()),await _0xe89eef['reply']('🔠\x20*'+_0x4c8be2[_0x2c71e6(0x174)]('')[_0x2c71e6(0x187)]('\x20')+_0x2c71e6(0x171)+_0x468712[_0x2c71e6(0x1a8)]()),fila=_0x4454d1,columna=_0x110955,sopaNube=_0x468712,sopaPalabra=_0x4c8be2,sopaDir=_0x10e6b0;}let _0x412c28=userSP+'@s.whatsapp.net';if(userSP!=_0xe89eef[_0x3c3069(0x173)][_0x3c3069(0x174)]('@')[0x0]){await _0x30f7c7[_0x3c3069(0x198)](_0xe89eef[_0x3c3069(0x1a5)],'*@'+_0x412c28['split']('@')[0x0]+'\x20ESTA\x20JUGANDO\x20SOPA\x20DE\x20LETRAS\x20ACTUALEMENTE*',_0xe89eef,{'mentions':[_0x412c28]});return;}if(intentos===0x0){intentos=0x3,_0x2cd5df(),_0x36be74();function _0x36be74(){setTimeout(()=>{const _0x414efa=_0x1c64;userSP!==null&&(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,_0x30f7c7[_0x414efa(0x198)](_0xe89eef[_0x414efa(0x1a5)],'*@'+_0xe89eef[_0x414efa(0x173)][_0x414efa(0x174)]('@')[0x0]+_0x414efa(0x191)+sopaPalabra+_0x414efa(0x192)+cambioLetra+_0x414efa(0x17b)+fila+'_\x20Y\x20COLUMNA\x20_'+columna+'_*',_0xe89eef,{'mentions':[_0xe89eef[_0x414efa(0x173)]]})),_0x36be74();},0x2*0x3c*0x3e8),setTimeout(()=>{const _0x2148eb=_0x1c64;_0x30f7c7[_0x2148eb(0x198)](_0xe89eef[_0x2148eb(0x1a5)],'*@'+_0xe89eef[_0x2148eb(0x173)]['split']('@')[0x0]+_0x2148eb(0x1a0),_0xe89eef,{'mentions':[_0xe89eef[_0x2148eb(0x173)]]});},0x1*0x3c*0x3e8);}}else{let _0x1f49ad=sopaDir;_0x1f49ad=_0x1f49ad[_0x3c3069(0x19a)](/([A-Z])/g,'\x20$1')[_0x3c3069(0x17e)]()[_0x3c3069(0x19a)](/^./,_0x3663a6=>_0x3663a6[_0x3c3069(0x179)]());if(''+fila+columna==_0x5d4433)await _0xe89eef[_0x3c3069(0x198)]('*CORRECTO!!\x20LA\x20PALABRA\x20_\x22'+sopaPalabra+_0x3c3069(0x192)+_0x1f49ad+_0x3c3069(0x17b)+fila+_0x3c3069(0x17c)+columna+'_*'),(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null),intentos=0x0;else{if(intentos===0x1){fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,await _0xe89eef[_0x3c3069(0x198)](_0x3c3069(0x190)+sopaPalabra+'\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_'+_0x1f49ad+_0x3c3069(0x17b)+fila+_0x3c3069(0x17c)+columna+'_*');return;}else intentos-=0x1,await _0xe89eef[_0x3c3069(0x198)](_0x3c3069(0x18f)+intentos+'_\x20INTENTOS!!*'+(intentos===0x1?'':'\x0a*PALABRA\x20A\x20ENCONTRAR:*\x20```'+sopaPalabra+_0x3c3069(0x193))+'\x0a\x0a'+(intentos===0x1?'```💡\x20PISTA!!```\x0a*LA\x20PALABRA\x20_'+sopaPalabra+_0x3c3069(0x1a9)+_0x1f49ad+_0x3c3069(0x1a7):'')+sopaNube);}}};function _0x3e6a(){const _0x452d85=['11HKLLhX','\x20TE\x20QUEDA\x20UN\x20MINUTO!!*','map','GATABOT','random','charCodeAt','chat','COMPUTER','\x22_*\x0a\x0a','trimEnd','_\x20SE\x20ENCUENTRA\x20EN\x20LA\x20DIRECCIÓN\x20_\x22','2910733VTGzUr','COLORES','LAPIZ','diagonalDerecha','*\x20🔠\x0a\x0a','CASA','sender','split','length','horizontal','1290qEWCDU','1840432ebYVNo','toUpperCase','3038202hcmhIs','_\x20DE\x20LA\x20FILA\x20_','_\x20Y\x20COLUMNA\x20_','\x22_\x20TIENE\x20_','toLowerCase','\x22```\x0a*TIENE\x20DOS\x20MINUTOS\x20PARA\x20ENCONTRAR\x20LA\x20RESPUESTA\x20CORRECTA*\x0a\x0a*ESCRIBA\x20EL\x20NÚMERO\x20DE\x20FILA\x20Y\x20COLUMNA\x20DEL\x20COMIENZO\x20DE\x20LA\x20PRIMERA\x20LETRA\x20_\x22','charAt','424938XHpzoy','\x20REGISTRADO\x20EN\x20EL\x20JUEGO*','919078TQYPDS','trim','MARCADORES','vertical','join','diagonalIzquierda','\x2028```\x0a➡️\x20```FILA\x202```\x20\x20\x20\x20⬇️\x20```COLUMNA\x208```\x0a*_\x22','10UhsOAS','🔠\x20*SOPA\x20DE\x20LETRAS*\x20🔠\x0a*PALABRA:*\x20```\x22','VIRUS','GITHUB','floor','*INCORRECTO.\x20TE\x20QUEDAN\x20_','*AGOTASTE\x20LOS\x20INTENTOS!!\x20LA\x20PALABRA\x20_\x22','\x20EL\x20TIEMPO\x20SE\x20HA\x20ACABADO!!*\x0a\x0a*LA\x20PALABRA\x20_\x22','\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_','```','MOTOS','32qsuPNi','20646BwnkcR',',\x20COLUMNA\x20','reply','_\x20INTENTOS!!*\x0a\x0a*EJEMPLO:*\x0a❇️\x20```','replace','\x20\x20\x20\x20\x20','PIZZAS','2271110sivfsW','keys'];_0x3e6a=function(){return _0x452d85;};return _0x3e6a();}handler['command']=/^(sopa)$/i;export default handler;
