"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82],{4196:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),s=n(9055),l=["components"],r={id:"attestation",title:"\ud83d\udd16 Attestation"},c=void 0,d={unversionedId:"sdk/workshop/attestation",id:"sdk/workshop/attestation",title:"\ud83d\udd16 Attestation",description:"In this section, you'll play the role of the attester:",source:"@site/docs/sdk/1-workshop/07-attestation.md",sourceDirName:"sdk/1-workshop",slug:"/sdk/workshop/attestation",permalink:"/docs/sdk/workshop/attestation",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/07-attestation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"attestation",title:"\ud83d\udd16 Attestation"},sidebar:"sdk",previous:{title:"\ud83d\udcac Claim",permalink:"/docs/sdk/workshop/claim"},next:{title:"\ud83d\udd10 Verify a Claim",permalink:"/docs/sdk/workshop/verification"}},u=[{value:"Create a file",id:"create-a-file",children:[],level:2},{value:"Code: validate the <code>RequestForAttestation</code> object",id:"code-validate-the-requestforattestation-object",children:[],level:2},{value:"Code: create an <code>Attestation</code>",id:"code-create-an-attestation",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],h={toc:u};function k(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll play the role of the ",(0,o.kt)("span",{class:"label-role attester"},"attester"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You'll take a ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestForAttestation")," object;"),(0,o.kt)("li",{parentName:"ul"},"Attest it;"),(0,o.kt)("li",{parentName:"ul"},"Store the attestation on the chain (more specifically only its hash, we'll get to that);"),(0,o.kt)("li",{parentName:"ul"},"Build the ",(0,o.kt)("inlineCode",{parentName:"li"},"Credential")," object which will be send back to the ",(0,o.kt)("span",{class:"label-role claimer"},"claimer"),".")),(0,o.kt)("h2",{id:"create-a-file"},"Create a file"),(0,o.kt)("p",null,"All of the code for this step needs to go into this file."),(0,o.kt)("h2",{id:"code-validate-the-requestforattestation-object"},"Code: validate the ",(0,o.kt)("inlineCode",{parentName:"h2"},"RequestForAttestation")," object"),(0,o.kt)("p",null,"In a real-life setup, as an ",(0,o.kt)("span",{class:"label-role attester"},"attester")," you would directly receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestForAttestation")," from a ",(0,o.kt)("span",{class:"label-role claimer"},"claimer"),"."),(0,o.kt)("p",null,"In this tutorial, you can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take the ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestForAttestation")," object you've generated in the previous step as a ",(0,o.kt)("span",{class:"label-role claimer"},"claimer"),";"),(0,o.kt)("li",{parentName:"ul"},"Or if you're in a workshop, ask another participant to send you their ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestForAttestation")," object.")),(0,o.kt)("p",null,"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"reconstructRequestForAttestation.js")," and add the following code"),(0,o.kt)("p",null,"To ensure the correct structure of the request for attestation."),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js')\n\nfunction requestForAttestationReconstructed(signedRequestForAttestation) {\n  return Kilt.RequestForAttestation.fromRequest(signedRequestForAttestation)\n}\n\nmodule.exports.requestForAttestationReconstructed =\n  requestForAttestationReconstructed\n"),(0,o.kt)("p",null,"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"verifyRequest.js")," and add the following code"),(0,o.kt)("p",null,"To check if the object is valid, you can check the data against the CTYPE\nand check if the signature is valid"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js')\n\nasync function verifyRequest(requestForAttestation) {\n  await Kilt.connect()\n\n  const isDataValid = requestForAttestation.verifyData()\n  const isSignatureValid = await requestForAttestation.verifySignature()\n  console.log('isDataValid: ', isDataValid)\n  console.log('isSignatureValid: ', isSignatureValid)\n\n  await Kilt.disconnect()\n\n  return isDataValid && isSignatureValid\n}\n\nmodule.exports.verifyRequest = verifyRequest\n"),(0,o.kt)("h2",{id:"code-create-an-attestation"},"Code: create an ",(0,o.kt)("inlineCode",{parentName:"h2"},"Attestation")),(0,o.kt)("p",null,"Create a new file ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation.js"),"."),(0,o.kt)("p",null,"Now is time to interact with the chain, in order to store an attestation on there."),(0,o.kt)("p",null,"Add the following code to ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation.js")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js')\n\nasync function attestCredential(\n  attester,\n  attesterFullDid,\n  requestForAttestation,\n  keystore\n) {\n  await Kilt.connect()\n\n  // build the attestation object\n  const attestation = Kilt.Attestation.fromRequestAndDid(\n    requestForAttestation,\n    attesterFullDid.details.did\n  )\n\n  if (await Kilt.Attestation.query(attestation.claimHash)) {\n    console.log('Attestation found on chain')\n\n    const credential = Kilt.Credential.fromRequestAndAttestation(\n      requestForAttestation,\n      attestation\n    )\n\n    // log the Credential so you can copy/send it back to the claimer\n    console.log('CredentialJSONString:\\n', JSON.stringify(credential))\n\n    // disconnect from the chain\n    await Kilt.disconnect()\n    return credential\n  }\n\n  // store the attestation on chain\n  const tx = await attestation.store()\n  const authorizedTx = await attesterFullDid.details.authorizeExtrinsic(\n    tx,\n    keystore,\n    attester.address\n  )\n  await Kilt.BlockchainUtils.signAndSubmitTx(authorizedTx, attester, {\n    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,\n  })\n  console.log('Attestation saved on chain.')\n\n  // the attestation was successfully stored on the chain, so you can now create the credential object\n  const credential = Kilt.Credential.fromRequestAndAttestation(\n    requestForAttestation,\n    attestation\n  )\n  // log the Credential so you can copy/send it back to the claimer\n  console.log('CredentialJSONString:\\n', JSON.stringify(credential))\n\n  // disconnect from the chain\n  await Kilt.disconnect()\n  console.log('Disconnected from KILT testnet')\n  return credential\n}\n\nmodule.exports.attestCredential = attestCredential\n"),(0,o.kt)("p",null,"Import the following code to your ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Run the code by running this command in your terminal, still within your ",(0,o.kt)("inlineCode",{parentName:"p"},"kilt-rocks")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,o.kt)("p",null,"You should see in your logs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if the signature and data are valid (they should be);"),(0,o.kt)("li",{parentName:"ul"},"The block hash in which the transaction was finalized or returns the attestation if on-chain already;"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Credential")," object.")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," object, you'll need it soon."),(0,o.kt)("p",null,"Your job as an ",(0,o.kt)("span",{class:"label-role attester"},"attester")," is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the ",(0,o.kt)("inlineCode",{parentName:"p"},"Credential")," object for the ",(0,o.kt)("span",{class:"label-role claimer"},"claimer"),"."))}k.isMDXComponent=!0}}]);