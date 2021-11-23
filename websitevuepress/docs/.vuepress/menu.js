/*
  1. 获取所有组件根目录下的README.md文件路径

 */
const fs = require("fs");
const path = require("path");
const root = "../packages";

const getMdNames = (target) => {
  return fs.readdirSync(target).filter((item) => item.endsWith(".md"));
};

const getCompMdPathList = () => {
  const comps = fs
    .readdirSync(root)
    .filter((fsName) => {
      // 其中的目录就是组件
      return (
        fs.existsSync(`${root}/${fsName}`) &&
        !fs.statSync(`${root}/${fsName}`).isFile()
      );
    })
    .map((fsName) => {
      return {
        fullpath: `${root}/${fsName}`,
        compName: fsName,
      };
    });

  const readMeFilesPath = comps
    .filter((compMsg) => {
      const mdPath = `${compMsg.fullpath}/README.md`;
      const isFile = fs.existsSync(mdPath) && fs.statSync(mdPath).isFile();
      console.log("readMeFilesPath", mdPath, isFile);
      return isFile && mdPath;
    })
    .map((compMsg) => ({
      fullpath: `${compMsg.fullpath}/README.md`.replace("packages", "comps"),
      compName: compMsg.compName,
    }));
  return readMeFilesPath;
};
module.exports = ["select", "BaseSelectMulti"];
