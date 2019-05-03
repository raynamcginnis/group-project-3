import React from "react";
import $ from "jquery";

class GoogleSearch extends React.Component {
   
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
    render() {
        return (
            <div id='gsearch'>
</div>
        )
    }
}


export default GoogleSearch;