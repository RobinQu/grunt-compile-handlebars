'use strict';

var grunt = require('grunt');

exports.clean = {
  allStatic: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/allStatic.html');
    var expected = grunt.file.read('test/expected/allStatic.html');

    test.equal(actual, expected, 'all static files should work');

    test.done();
  },
  dynamicTemplate: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/dynamicTemplate.html');
    var expected = grunt.file.read('test/expected/dynamicTemplate.html');

    test.equal(actual, expected, 'Inline handlabrs should work');

    test.done();
  },
  dynamicTemplateData: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/dynamicTemplateData.html');
    var expected = grunt.file.read('test/expected/dynamicTemplateData.html');

    test.equal(actual, expected, 'Inline JSON objects as data should work');

    test.done();
  },
  dynamicPre: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/dynamicPre.html');
    var expected = grunt.file.read('test/expected/dynamicPre.html');

    test.equal(actual, expected, 'Inline html as static data before template should work');

    test.done();
  },
  dynamicPost: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('tmp/dynamicPost.html');
    var expected = grunt.file.read('test/expected/dynamicPost.html');

    test.equal(actual, expected, 'Inline html as static data after template should work');

    test.done();
  },
  globbedTemplateAndOutput: function(test) {
    test.expect(2);

    var shallowActual   = grunt.file.read('tmp/deep/spanish.html');
    var shallowExpected = grunt.file.read('test/expected/deep/spanish.html');
    var deepActual   = grunt.file.read('tmp/deep/deeper/portuguese.html');
    var deepExpected = grunt.file.read('test/expected/deep/deeper/portuguese.html');

    test.equal(shallowActual, shallowExpected, 'Shallow globbed files should generated equally named output files');

    test.equal(deepActual, deepExpected, 'Deeply globbed files should generated equally named output files');

    test.done();
  }
};
