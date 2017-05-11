// ----------------------------------------
// SHOW RECENT POSTS
// ----------------------------------------
// This functions takes a blogger-feed in JSON
// format and displays it.
//
// Version: 2.0
// Date:    2006-12-01
// Author:  Hans Oosting
// ----------------------------------------
// Traducci�n espa�ol:  tomat
// URL:     tomat-3.blogspot.com

function showrecentposts(json) {

  for (var i = 0; i < numposts; i++) {
    if (i == json.feed.entry.length) break;
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
    posttitle = posttitle.link(posturl);
    var readmorelink = "(mas)";
    readmorelink = readmorelink.link(posturl);
    var postdate = entry.published.$t;
    var cdyear = postdate.substring(0,4);
    var cdmonth = postdate.substring(5,7);
    var cdday = postdate.substring(8,10);
    var monthnames = new Array();
    monthnames[1] = "Ene";
    monthnames[2] = "Feb";
    monthnames[3] = "Mar";
    monthnames[4] = "Abr";
    monthnames[5] = "May";
    monthnames[6] = "Jun";
    monthnames[7] = "Jul";
    monthnames[8] = "Ago";
    monthnames[9] = "Sep";
    monthnames[10] = "Oct";
    monthnames[11] = "Nov";
    monthnames[12] = "Dic";
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
    if (!standardstyling) document.write('<div class="bbrecpost">');
    if (standardstyling) document.write('<br/>');
    document.write(posttitle);
    if (showpostdate == true) document.write(' - ' + cdday + ' ' + monthnames[parseInt(cdmonth,10)]);
    if (!standardstyling) document.write('</div><div class="bbrecpostsum"">');
    if (showpostsummary == true) {
      if (standardstyling) document.write('<br/>');
      if (postcontent.length < numchars) {
         if (standardstyling) document.write('<i>');
         document.write(postcontent);
         if (standardstyling) document.write('</i>');}
      else {
         if (standardstyling) document.write('<i>');
         postcontent = postcontent.substring(0, numchars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + '...' + readmorelink);
         if (standardstyling) document.write('</i>');}
}
    if (!standardstyling) document.write('</div>');
    if (standardstyling) document.write('<br/>');
}
if (!standardstyling) document.write('<div class="bbwidgetfooter">');
if (standardstyling) document.write('<br/>');
if (!standardstyling) document.write('</div>');

}