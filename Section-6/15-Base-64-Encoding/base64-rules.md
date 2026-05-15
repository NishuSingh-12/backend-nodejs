1. At least 3 bytes (24 bits) should be there to work with.

2. If 3 bytes are not there then base64 encoding will add multiple
   zeros to fill the remainig bits.

3. Data should be in the multiples of 3 bytes.
