import React from 'react';
import ISimpleMDE from 'react-simplemde-v1';
import 'simplemde/dist/simplemde.min.css';

const option = {};

const onReady = function(instance) {
  console.log(instance.value());
};

const onEvents = {
  'change': function() {
    // the 'this' variable can get SimpleMDE instance
    console.log(this.value());
  }
};

function Editor () {
    return(
        <ISimpleMDE 
            option={option}
            text={'Hi!'}
            onReady={onReady}
            onEvents={onEvents}
        />
    )
}

export default Editor;