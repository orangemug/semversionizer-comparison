var compare = require("../");
var spec    = require("semver-spec");

require("should");

describe('Semver', function() {
	describe('#compare()', function() {
		spec.compare.forEach(function(suite) {
			suite.data.forEach(function(spec) {
				it(spec.data[0]+"<"+spec.data[1], function() {
					compare(spec.data[0], spec.data[1]).should.eql(spec.result);
				});
			});
		});
	});
});

