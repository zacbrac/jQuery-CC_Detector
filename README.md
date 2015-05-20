# jQuery-CC_Detector
A jQuery credit card detector to add a little flair to your credit card inputs.

To set up: 

Make sure you have jQuery included on the page.

Add the css, images, and js into your html like so

```html
<link rel="stylesheet" type="text/css" href="cc_detector.css">
<script src="cc_detector.js"></script>
<script>
	$(document).ready(function() {

	    CC_Checker.init("#credit_card_input");

	});
</script>
```

and then just make sure the credit card input you're using has the id of credit_card_input, if you'd like to use a different selector you can, just make sure to alter the cc_detector.css accordingly.

Check it out here http://zacbrac.github.io/jQuery-CC_Detector/

Enjoy.
