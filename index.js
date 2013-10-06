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

  Yes, using the [buffers](https://github.com/substack/buffers) module you
  can. 

  <<< exercises/group.js

  It is, however, important to note that the behaviour of slice within the 
  `buffers` module is different to that of the native Buffer slice (as shown
  by the console log of d and e after updating a).
**/