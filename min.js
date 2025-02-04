let hash = async (s) =>
    Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))))
        .map(b => b.toString(16).padStart(2, '0')).join('');

async function launch(ticker, mnemonic, success) {
    let privateKey = await hash(mnemonic);
    let address = await hash(privateKey);
    let launchHash = await hash(await hash(ticker + address + privateKey));
    fetch(location.origin + "/mfm-token/send", {
        method: "POST",
        body: JSON.stringify({
            domain: ticker,
            to: address,
            next_hash: launchHash,
            amount: 1000000,
        }),
    }).then(success);
}