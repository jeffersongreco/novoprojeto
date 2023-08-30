#! usr/bin/env node

const { execSync } = require('child_process')

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (e) {
    console.error(`Erro ao executar ${command}`, e)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/jeffersongreco/create-novoprojeto.git ${repoName}`
const installDepsCommand = `cd ${repoName} && pnpm install`

console.log(`Criando ${repoName}`)
const checkOut = runCommand(gitCheckoutCommand)
if (!checkOut) process.exit(-1)

console.log(`Instalando as dependências para ${repoName}`)
const installDeps = runCommand(installDepsCommand)
if (!checkOut) process.exit(-1)

console.log(`${repoName} pronto!`)
console.log('Use o seguinte comando para começar seu novo projeto:')
console.log(`cd ${repoName} && code .`)
