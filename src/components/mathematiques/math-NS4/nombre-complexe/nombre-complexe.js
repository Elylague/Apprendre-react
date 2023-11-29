import React from 'react'

function NombreComplexe({titleChapter}) {
  
  const ensembles=<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline" data-semantic-type="relseq" data-semantic-role="set" data-semantic-id="9" data-semantic-children="0,2,4,6,8" data-semantic-content="1,3,5,7" data-semantic-speech="upper N subset of upper Z subset of upper D subset of upper Q subset of upper R">
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="9">N</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="1" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">&#x2282;</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="9">Z</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">&#x2282;</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="9">D</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="5" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">&#x2282;</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="9">Q</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">&#x2282;</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">R</mi>
    </mrow>
  </math>
  
  
  const ensemb=<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline" data-semantic-type="relseq" data-semantic-role="set" data-semantic-id="9" data-semantic-children="0,2,4,6,8" data-semantic-content="1,3,5,7" data-semantic-speech="upper N subset of upper Z subset of upper D subset of upper Q subset of upper R">
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="0" data-semantic-parent="9">N</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="1" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">,</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="2" data-semantic-parent="9">Z</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="3" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">,</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="4" data-semantic-parent="9">D</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="5" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">,</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="6" data-semantic-parent="9">Q</mi>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mo data-semantic-type="relation" data-semantic-role="set" data-semantic-id="7" data-semantic-parent="9" data-semantic-operator="relseq,&#x2282;">,</mo>
    </mrow>
    <mrow data-mjx-texclass="ORD">
      <mi data-semantic-type="identifier" data-semantic-role="latinletter" data-semantic-font="italic" data-semantic-annotation="clearspeak:simple" data-semantic-id="8" data-semantic-parent="9">R</mi>
    </mrow>
  </math>
  
  
  
  return(
    

    <>
      <h3>{titleChapter}</h3>
      <p>les ensembles des nombres {ensemb} sont inclus l'un  dans l'autre: {ensembles}
        </p>
      
    </>
    
    
    
    )
}




export {NombreComplexe}