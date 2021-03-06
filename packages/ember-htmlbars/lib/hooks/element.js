/**
@module ember
@submodule ember-htmlbars
*/

import streamifyArgs from "ember-htmlbars/system/streamify-arguments";
import lookupHelper from "ember-htmlbars/system/lookup-helper";

export default function element(domElement, path, view, params, hash, options, env) { //jshint ignore:line
  var helper = lookupHelper(path, view, env);

  if (helper) {
    streamifyArgs(view, params, hash, options, env, helper);
    return helper.helperFunction.call(view, params, hash, options, env);
  } else {
    return view.getStream(path);
  }
}

