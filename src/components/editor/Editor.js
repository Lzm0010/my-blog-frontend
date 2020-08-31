import React from 'react';
import ISimpleMDE from 'react-simplemde-v1';
import 'simplemde/dist/simplemde.min.css';


function Editor (props) {
    const option = {};
    //Visit this site for config options
    //https://github.com/sparksuite/simplemde-markdown-editor
    
    const onReady = function(instance) {
      console.log(instance.value());
    };
    
    const onEvents = {
      'change': function() {
        // the 'this' variable can get SimpleMDE instance
        // console.log(this.value());
        props.setContent(this.value());
      }
    };

    return(
        <ISimpleMDE 
            option={option}
            text={props.content}
            onReady={onReady}
            onEvents={onEvents}
        />
    )
}

export default Editor;