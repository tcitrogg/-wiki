## Installing NVM
- Run this command if you don't have `wget` installed on your PC
```bash
sudo apt-get install wget
```
()[https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh]
- Start by running this command
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
- Check either `~/.profile`, `~/.bashrc`, `~/.zshrc` to confirm that it contains this. _Will be added automatically after running the first command_
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

- Restart terminal or run `source ~/.profile, bashrc, zshrc}` then run this command to confirm that `nvm` is successfully installed
```bash
nvm --version
```

## Installing Node with NVM
- List all node versions available
```bash
nvm ls-remote
```

- Install latest node LTS version
```bash
nvm install --lts
```

- Run this command to confirm that `node` is successfully installed
```bash
node --version
```

- You can start using NodeJs