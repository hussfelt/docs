---
id: attestation
title: 🔖 Attestation
---

import CodeBlock from '@theme/CodeBlock';
import Example1 from '!!raw-loader!../../../code-examples/workshop/5_1_attestation.js';
import Example2 from '!!raw-loader!../../../code-examples/workshop/5_2_attestation.js';
import Example3 from '!!raw-loader!../../../code-examples/workshop/5_3_attestation.js';

In this section, you'll play the role of the <span class="label-role attester">attester</span>:

- You'll take a `RequestForAttestation` object;
- Attest it;
- Store the attestation on the chain (more specifically only its hash, we'll get to that);
- Build the `Credential` object which will be send back to the <span class="label-role claimer">claimer</span>.

## Create a file

All of the code for this step needs to go into this file.

## Code: validate the `RequestForAttestation` object

In a real-life setup, as an <span class="label-role attester">attester</span> you would directly receive a `RequestForAttestation` from a <span class="label-role claimer">claimer</span>.

In this tutorial, you can either:

- Take the `RequestForAttestation` object you've generated in the previous step as a <span class="label-role claimer">claimer</span>;
- Or if you're in a workshop, ask another participant to send you their `RequestForAttestation` object.

Create a new file `reconstructRequestForAttestation.js` and add the following code

To ensure the correct structure of the request for attestation.

<CodeBlock className="language-js">
  {Example1}
</CodeBlock>

Create a new file `verifyRequest.js` and add the following code

To check if the object is valid, you can check the data against the CTYPE
and check if the signature is valid

<CodeBlock className="language-js">
  {Example2}
</CodeBlock>

## Code: create an `Attestation`

Create a new file `attestation.js`.

Now is time to interact with the chain, in order to store an attestation on there.

Add the following code to `attestation.js`

<CodeBlock className="language-js">
  {Example3}
</CodeBlock>

Import the following code to your `main` function inside the `index.js`.

## Run

Run the code by running this command in your terminal, still within your `kilt-rocks` directory:

```bash
node index.js
```

You should see in your logs:

- `true` and `true` if the signature and data are valid (they should be);
- The block hash in which the transaction was finalized or returns the attestation if on-chain already;
- The `Credential` object.

Copy the `Credential` object, you'll need it soon.

Your job as an <span class="label-role attester">attester</span> is done: you've successfully attested a claim, written the attestation hash onto the chain, and prepared the `Credential` object for the <span class="label-role claimer">claimer</span>.