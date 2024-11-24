const rtfToHTML = require('@iarna/rtf-to-html')

rtfToHTML.fromString("{\\rtf1\\fbidis\\ansi\\ansicpg1252\\deff0\\deflang1033{\\fonttbl{\\f0\\froman\\fprq2\\fcharset0 Verdana;}{\\f1\\fnil\\fcharset0 Trebuchet MS;}} \\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs20 TECHNIQUE\\b0 :- \\par Non contrast of CT the abdomen and pelvis was performed without oral contrast. \\par \\b FINDINGS\\b0 : \\par \\tab \\par \\pard\\ltrpar\\fi-360\\li720\\'b7\\tab The liver, spleen and pancreas are normal. No focal calcification or mass lesion is seen in the pancreas. The main pancreatic duct is not dilated. The gall bladder has normal size and wall thickness. No radiopaque stone. There is no evidence for biliary duct dilation. \\par \\'b7\\tab The kidneys are normal in appearance bilaterally with no evidence for radiodense stone or hydronephrosis.There is no radiodense stone in the ureter or bladder. The adrenal glands appear normal. \\par .\\tab There is a fat stranding around the ascending colon with thickened peritoneum. There is no abnormal bowel wall thickening and appendix has normal caliber. \\par \\'b7\\tab There is no evidence for mass or lymphadenopathy in the abdomen or pelvis. \\par \\'b7\\tab There is no evidence for ascites. \\par \\'b7\\tab The visualized lung bases are clear. \\par \\'b7\\tab Osseous structures are normal. \\par \\pard\\ltrpar \\par \\b IMPRESSION\\b0 : \\par Localized fat stranding 2* to ? IBD \\par \\pard\\ltrpar No evidence of urolithiasis\\f1\\fs20 \\par }", (err, html) => {
      console.log(html)
    //   prints a document containing:
    //   <!DOCTYPE html>
{/* <html>
  <head>
    <meta charset="UTF-8">
    <style>
    body {
      margin-left: 90pt;
      margin-right: 90pt;
      margin-top: 72pt;
      margin-bottom: 72pt;
      font-size: 10pt;
      text-indent: 0pt;
    }
    </style>
  </head>
  <body>
    <p style="font-family: Verdana, serif"><span style="font-size: 12pt;"> </span><strong>TECHNIQUE</strong>:- </p>

<p style="font-family: Verdana, serif">Non contrast of CT the abdomen and pelvis was performed without oral contrast. </p>

<p style="font-family: Verdana, serif"><strong>FINDINGS</strong>: </p>

<p style="font-family: Verdana, serif"> </p>

<p style="padding-left: 36pt;">·        The liver, spleen and pancreas are normal. No focal calcification or mass lesion is seen in the pancreas. The main pancreatic duct is not dilated. The gall bladder has normal size and wall thickness. No radiopaque stone. There is no evidence for biliary duct dilation. </p>

<p style="padding-left: 36pt;">·        The kidneys are normal in appearance bilaterally with no evidence for radiodense stone or hydronephrosis.There is no radiodense stone in the ureter or bladder. The adrenal glands appear normal. </p>

<p style="padding-left: 36pt;">.        There is a fat stranding around the ascending colon with thickened peritoneum. There is no abnormal bowel wall thickening and appendix has normal caliber. </p>

<p style="padding-left: 36pt;">·        There is no evidence for mass or lymphadenopathy in the abdomen or pelvis. </p>

<p style="padding-left: 36pt;">·        There is no evidence for ascites. </p>

<p style="padding-left: 36pt;">·        The visualized lung bases are clear. </p>

<p style="padding-left: 36pt;">·        Osseous structures are normal. </p>

<p><strong>IMPRESSION</strong>: </p>

<p>Localized fat stranding 2* to ? IBD </p>

<p>No evidence of urolithiasis</p>
  </body>
</html> */}
    })
    
// const parseRTF = require('rtf-parser')
// const fs = require('fs')
     
// parseRTF.string("{\\rtf1\\fbidis\\ansi\\ansicpg1252\\deff0\\deflang1033{\\fonttbl{\\f0\\froman\\fprq2\\fcharset0 Verdana;}{\\f1\\fnil\\fcharset0 Trebuchet MS;}} \\viewkind4\\uc1\\pard\\ltrpar\\b\\f0\\fs20 TECHNIQUE\\b0 :- \\par Non contrast of CT the abdomen and pelvis was performed without oral contrast. \\par \\b FINDINGS\\b0 : \\par \\tab \\par \\pard\\ltrpar\\fi-360\\li720\\'b7\\tab The liver, spleen and pancreas are normal. No focal calcification or mass lesion is seen in the pancreas. The main pancreatic duct is not dilated. The gall bladder has normal size and wall thickness. No radiopaque stone. There is no evidence for biliary duct dilation. \\par \\'b7\\tab The kidneys are normal in appearance bilaterally with no evidence for radiodense stone or hydronephrosis.There is no radiodense stone in the ureter or bladder. The adrenal glands appear normal. \\par .\\tab There is a fat stranding around the ascending colon with thickened peritoneum. There is no abnormal bowel wall thickening and appendix has normal caliber. \\par \\'b7\\tab There is no evidence for mass or lymphadenopathy in the abdomen or pelvis. \\par \\'b7\\tab There is no evidence for ascites. \\par \\'b7\\tab The visualized lung bases are clear. \\par \\'b7\\tab Osseous structures are normal. \\par \\pard\\ltrpar \\par \\b IMPRESSION\\b0 : \\par Localized fat stranding 2* to ? IBD \\par \\pard\\ltrpar No evidence of urolithiasis\\f1\\fs20 \\par }", (err, doc) => {
//     console.log(doc);
// })




