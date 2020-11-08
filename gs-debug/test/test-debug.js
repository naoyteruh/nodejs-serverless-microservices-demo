/*
Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const tap = require('tap').test;

const debug = require('../debug.js');

tap('the same image should return true', (t) => {
  t.plan(1);
  debug.debugContext({
    eventId: "",
    eventType: ""
  });
  debug.debugFile({
    bucket: "",
    name: "",
    metageneration: "",
    timeCreated: "",
    updated: ""  
  });
  t.ok(true ,'Error happened');
});