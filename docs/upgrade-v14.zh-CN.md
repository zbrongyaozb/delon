---
order: 1000
type: Basic
title: 升级到 14.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `13` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `14.15` <= `16.10.0`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 1. 升级相关依赖

- 将项目升级到 Angular 14 运行 `ng update @angular/core@14 @angular/cli@14 @angular-eslint/schematics@14`。
- 如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@14`

### 2.升级 NG-ZORRO

- 运行 `ng update ng-zorro-antd@14`
- 如果控制台出现警告消息请按提示修改对应代码

### 3.升级 NG-ALAIN

- 运行 `ng update ng-alain@14`
