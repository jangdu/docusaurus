---
slug: next-jupyter-ui-적용
title: Next.js 프로젝트에 Jupyter-UI 적용
description: Next.js 프로젝트에 Data Layer에서 제공하는 jupyter-ui 라이브러리를 적용한 경험 Yarn 버전 업그레이드 과정과 라이브러리 통합 과정을 다룹니다.
authors: [jangdu]
tags: [react, nextjs, jupyter-ui, yarn, yarn-version, yarn-3.5.0]
date: 2024-03-24
enableComments: true # for Gisqus
published: false
---

# Next.js 프로젝트에 Jupyter-UI 라이브러리 적용

## 서론

이 글에서는 React 기반의 프레임워크인 Next.js 프로젝트에 Data-Layer에서 제공하는 [**jupyter-ui**](https://github.com/datalayer/jupyter-ui) 라이브러리를 적용한 경험을 공유합니다. <br />
특히, 기존에 사용하던 Yarn 1.22.xx 버전에서 3.5.0버전으로 Yarn을 업그레이드하는 과정을 중점적으로 다룹니다.

---

## Yarn 버전 업그레이드의 필요성

### 기존 환경

- **프로젝트**: React 기반의 Next.js
- **패키지 매니저**: Yarn 1.22.xx

`jupyter-ui` 라이브러리를 프로젝트에 통합하며, 기존 Yarn 버전과의 호환성 문제가 발생했습니다. <br />
특히, `jupyter-ui`라이브러리가 요구하는 특정 의존성 버전을 해결하기 위해 Yarn 버전 업그레이드가 필요했습니다.

기존 next.js 프로젝트에서는 `jupyter-ui` 라이브러리를 사용하지 않았으며, Yarn 1.22.xx 버전을 사용하고 있었습니다. <br />

## Yarn 3.5.0으로 업그레이드 과정

### 1. **업그레이드 실행**:

Yarn을 최신 버전으로 업그레이드하기 위해 아래의 명령어를 사용했습니다.

```bash title="Upgrade Yarn"
yarn set version 3.5.0
```

### 2. **업그레이드 후 설정 확인 및 조정**:

```bash title="Check Yarn version"
yarn -v
```

> yarn 3.5.0 버전으로 업그레이들르 한 뒤 package.json 파일에 packageManager 항목이 자동으로 추가되었습니다. 이 항목은 yarn 버전을 명시하는 항목으로, yarn 3.5.0 버전 이후로는 packageManager 항목을 통해 yarn 버전을 명시할 수 있습니다.

```json title="package.json"
{
  "name": "my-project",
  "version": "1.0.0",
  //  추가된 코드
  "packageManager": "yarn@3.5.0",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

업그레이드 후 `yarnrc` 파일을 확인하고 필요한 설정 조정을 했습니다. Yarn 3.5.0은 기존 버전과 비교하여 더 많은 설정과 커스터마이징 옵션을 제공합니다.

```yaml title=".yarnrc.yml"
nodeLinker: node-modules
```

### 3. **의존성 확인 및 재설치**:

```bash title="Reinstall dependencies"
yarn install
```

기존 프로젝트의 의존성을 최신 버전의 Yarn으로 재설치하여 모든 패키지가 올바르게 작동하는지 확인했습니다.

## Jupyter-UI 통합 과정

### 라이브러리 설치

`jupyter-ui` 라이브러리를 프로젝트에 추가하는 과정은 간단했습니다.

```bash
yarn add @data-layer/jupyter-ui
```

### 라이브러리 사용

Next.js 컴포넌트에서 `jupyter-ui`를 사용하여 데이터 시각화 기능을 구현했습니다.

```jsx
import JupyterViewer from '@data-layer/jupyter-ui';

const MyComponent = () => (
  <div>
    <JupyterViewer notebook={notebookData} />
  </div>
);
```
