import React from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Warning from '@editorjs/warning';
import CodeTool from '@editorjs/code';
import SimpleImage from "@editorjs/simple-image";
import ToggleBlock from 'editorjs-toggle-block';
import Title from "title-editorjs";
import Table from '@editorjs/table'
import ChangeCase from 'editorjs-change-case';
import List from "@editorjs/list";
import Checklist from '@editorjs/checklist'
import Alert from 'editorjs-alert';
import Quote from '@editorjs/quote';
var edjsHTML=function(){"use strict";var e=["left","right","center","justify"],t={delimiter:function(){return"<br/>"},header:function(e){var t=e.data;return"<h"+t.level+">"+t.text+"</h"+t.level+">"},paragraph:function(t){var r=t.data,n=r.alignment||r.align;return void 0!==n&&e.includes(n)?'<p style="text-align:'+n+';">'+r.text+"</p>":"<p>"+r.text+"</p>"},list:function(e){var t=e.data,r="unordered"===t.style?"ul":"ol",n=function(e,t){var r=e.map((function(e){if(!e.content&&!e.items)return"<li>"+e+"</li>";var r="";return e.items&&(r=n(e.items,t)),e.content?"<li> "+e.content+" </li>"+r:void 0}));return"<"+t+">"+r.join("")+"</"+t+">"};return n(t.items,r)},image:function(e){var t=e.data,r=t.caption?t.caption:"Image";return'<img src="'+(t.file&&t.file.url?t.file.url:t.url)+'" alt="'+r+'" />'},quote:function(e){var t=e.data;return"<blockquote>"+t.text+"</blockquote> - "+t.caption},code:function(e){return"<pre><code>"+e.data.code+"</code></pre>"},embed:function(e){var t=e.data;switch(t.service){case"vimeo":return'<iframe src="'+t.embed+'" height="'+t.height+'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';case"youtube":return'<iframe width="'+t.width+'" height="'+t.height+'" src="'+t.embed+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';default:throw new Error("Only Youtube and Vime Embeds are supported right now.")}}};function r(e){return new Error('[31m The Parser function of type "'+e+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}var n=function(e){void 0===e&&(e={});var i=Object.assign({},t,e);return{parse:function(e){return e.blocks.map((function(e){return i[e.type]?i[e.type](e):r(e.type)}))},parseBlock:function(e){return i[e.type]?i[e.type](e):r(e.type)},parseStrict:function(e){var t=e.blocks,o=n(i).validate({blocks:t});if(o.length)throw new Error("Parser Functions missing for blocks: "+o.toString());for(var a=[],u=0;u<t.length;u++){if(!i[t[u].type])throw r(t[u].type);a.push(i[t[u].type](t[u]))}return a},validate:function(e){var t=e.blocks.map((function(e){return e.type})).filter((function(e,t,r){return r.indexOf(e)===t})),r=Object.keys(i);return t.filter((function(e){return!r.includes(e)}))}}};return n}();
function Editor() {
    const editor = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        
        placeholder: 'Let`s write an awesome story! or Paste Image',
        holder: 'editorjs',
        tools: {
            quote: Quote,
          header: {
                class: Header,
                config: {
                  levels: [1, 2, 3, 4, 5],
                  defaultLevel: 1,
                  allowAnchor: true,
                  anchorLength: 200,
                },
            },
            alert: Alert,

            changeCase: {
                class: ChangeCase,
                config: {
                  showLocaleOption: true, // enable locale case options
                  locale: 'tr' // or ['tr', 'TR', 'tr-TR']
                }
              },
              checklist: {
                class: Checklist,
                inlineToolbar: true,
              },
              list: {
                class: List,
                inlineToolbar: true,
                config: {
                  defaultStyle: 'unordered'
                }
              },
            title: Title,
            warning: Warning,
            code: CodeTool,
            image: SimpleImage,
            table: Table,


            toggle: {
                class: ToggleBlock,
                inlineToolbar: true,
              },
          },
          data : JSON.parse(localStorage.getItem("content")),
      });


      function onSave() {
        editor.save().then((outputData) => {
            localStorage.setItem("content", JSON.stringify(outputData));
            console.log(JSON.parse( localStorage.getItem("content")));
            const edjsParser = edjsHTML();

            let html = edjsParser.parse(outputData);
          
            console.log("html",html);
            // console.log('Article data: ', outputData)
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
      }


  return (
    <div className="">
        <button onClick={onSave}>Save</button>
        <div id="editorjs"/>
    </div>
  )
}

export default Editor