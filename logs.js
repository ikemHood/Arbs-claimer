import chalk from "chalk";

const scan = `https://arbiscan.io/`

export const claimedOkLog = (accountId, amount, hash) => console.log(`${chalk.bgGreenBright.whiteBright(`  [${accountId}] Claimed ${amount} $ARB. ${scan}/tx/${hash}`)}`);
export const claimedFailLog = (accountId, address) => console.log(`${chalk.bgRedBright.whiteBright(`  [${accountId}] Claim wasn't successful for ${address}`)}`);
export const transferOkLog = (accountId, amount, hash) => console.log(`${chalk.bgGreenBright.whiteBright(`  [${accountId}] Transferred ${amount} $ARB. ${scan}/tx/${hash}`)}`);
export const transferFailLog = (accountId, address) => console.log(`${chalk.bgRedBright.whiteBright(`  [${accountId}] Transfer wasn't successful for ${address}`)}`);
export const claimNotStartedLog = (blockNum) => console.log(`${chalk.bgYellow.whiteBright(`  [${blockNum}] Claim not started yet. Waiting for the next block.`)}`);
export const claimStartedLog = (blockNum) => console.log(`${chalk.bgGreenBright.whiteBright(`  [${blockNum}] Claim started!`)}`);
export const scriptStartedLog = (block, claimBlock) => console.log(`${chalk.bgGreenBright.whiteBright(`  Script started. Current block - ${block}. Claim block - ${claimBlock}`)}`);

export const welcomeLog = () => console.log(`
${chalk.bgBlueBright.whiteBright(`
  𝗔𝗥𝗕 𝗖𝗟𝗔𝗜𝗠𝗘𝗥`)}
${chalk.cyanBright(`
  Developed by FudMonk:
  Discord: PEPE MONK#2552
  WhatsApp: https://wa.me/2348101354115
  
  Donate addresses:
  ${chalk.bgYellowBright.whiteBright("0xE26842F715Ba5837C4A41078D25A22D23279BFA6")} - USDC USDT ETH [Ethereum Polygon Arbitrum Optimism]
`)}
`);
export const resultsLog = ({
                             accountsDone,
                             totalAccounts,
                             claimsOk,
                             transfersOk
                           }) => console.log(`
${chalk.bgBlueBright.whiteBright(`
  𝗔𝗥𝗕 𝗖𝗟𝗔𝗜𝗠𝗘𝗥 𝗥𝗘𝗦𝗨𝗟𝗧𝗦`)}
${chalk.cyanBright(`
  Accounts done: ${accountsDone}/${totalAccounts}
  Successful claims: ${claimsOk}/${totalAccounts}
  Successful transfers: ${transfersOk}/${totalAccounts}`)}
  ${chalk.cyanBright(`
  Developed by FudMonk:
  Discord: PEPE MONK#2552
  WhatsApp: https://wa.me/2348101354115
  
  Donate addresses:
  ${chalk.bgYellowBright.whiteBright("0xE26842F715Ba5837C4A41078D25A22D23279BFA6")} - USDC USDT ETH [Ethereum Polygon Arbitrum Optimism]
`)}
`);

