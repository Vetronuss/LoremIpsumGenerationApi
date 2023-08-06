function setup()
{
  let params = getURLParams();
  var jslorem = LoremIpsum;
  var out = "NotAvail";
  if (params.t=="p")
  {
    out = jslorem.paragraphs(params.n);
  }
  if (params.t=="w")
  {
    out = jslorem.words(params.n);
  }
  if (params.t=="s")
  {
    out = jslorem.words(params.n);
  }
  var ht = document.querySelector('.txt');
  console.log(ht);
  console.log(out);
  document.body.innerHTML = out;
  
}