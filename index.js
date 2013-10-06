/* jshint node: true */
'use strict';

/**
  # The Nature of NodeJS Buffers

  This is a simple journey that explores the nature of the NodeJS
  [Buffer](http://nodejs.org/api/buffer.html).  After reading the docs there
  are a still a few things that remain a mystery around buffers.

  For instance:

  - Which operations create new copies of existing buffers, vs which ops
    create buffers that reference the original memory.  The documentation is
    pretty clear when it comes to
    [slice](http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)
    but not so clear with other methods.

  Through experimentation and examples we will explore the core node
  buffers (and some useful additional modules from userland).

  ## Exercises

  The following exercises have been created organically as I have had
  questions that needed answering.  Apologies for them not being in any
  order that makes sense...

  ### Does `Buffer.slice` work on a reference?

  While the documentation is pretty clear about this, let's check for
  ourselves.

  <<< exercises/slice.js

  ### Does `Buffer.concat` create a copy?

  <<< exercises/concat.js

  ### Can I create a logical grouped buffer?

  Yes, using the [bl](https://github.com/rvagg/bl) module you can. 

  <<< exercises/group.js

  #### References vs Copies when slicing

  As outlined in the `bl` module docs for the
  [slice method](https://github.com/rvagg/bl#blslice-start--end--), slice
  will return a reference to the original buffer if the slice operation 
  remains within the boundary of the original buffer.  If, however, it crosses
  a buffer boundary then a copy operation will need to occur.

  For an example of this compare the console output of `d` and `e` after 
  modifying the original buffer `a`.
  
**/