var compare = require("../");
var spec    = require("semver-spec");

require("should");

describe('Semver', function() {
	describe('#compare()', function() {
		spec.compare.forEach(function(suite) {
			suite.data.forEach(function(spec) {
				it(spec.data.v1+"<"+spec.data.v2, function() {
					compare(spec.data.v1, spec.data.v2).should.eql(spec.result);
				});
			});
		});
	});
});

