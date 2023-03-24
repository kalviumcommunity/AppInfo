function Permissions(applicationName) {
    return new Promise((resolve, reject) => {
      exec(`cd uploads && ./aapt2 dump permissions ${applicationName}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout.toString());
        }
      });
    });
  }

  async function someFunction(applicationName) {
    try {
      const permissions = await Permissions(applicationName);
      console.log(permissions);
    } catch (error) {
      console.error(error);
    }
  }