//importing react and jquery
import React from "react";
import $ from "jquery";

//This is the component that does a google custom search
class GoogleSearch extends React.Component {
   
    // the google search bar
    componentDidMount()
    {
        const embedcode = `<script>
            (function() {
        const cx = '001762422638858535577:ygpmttkkr2e';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
      </script>
      <gcse:search></gcse:search>`

      $('#gsearch').html(embedcode)
    }
    // rendering it to the page in its own div
    render() {
        return (
            <div id='gsearch'>
</div>
        )
    }
}

// exporting google search
export default GoogleSearch;