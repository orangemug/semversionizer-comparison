# semverionizer-comparison
A [semver](http://semver.org/) comparison library.


## Usage
Compare using the following

    var compare = require("semverionizer-comparison");
    compare("3.4.5", "3.4.6"); // => -1
    compare("3.4.5", "3.4.5"); // => 0
    compare("3.6.5", "3.4.6"); // => 1

The following rules apply

    a<b   => -1
    a==b  => 0
    a>b   => 1


## License
MIT
