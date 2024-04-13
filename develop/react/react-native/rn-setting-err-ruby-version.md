---
slug: rn-setting-err-ruby-version
title: React Native 프로젝트에서 Ruby 버전 설정 오류 해결
description: React Native 프로젝트에서 Ruby 버전 설정 오류가 발생했을 때 해결 방법을 다룹니다.
authors: [jangdu]
tags: [react, react-native, TIL]
date: 2024-04-10
enableComments: true # for Gisqus
published: false
---

# React Native 프로젝트에서 Ruby 버전 설정 오류 해결

## 문제 상황

React Native 프로젝트를 세팅하며, Ruby 버전 설정 오류가 발생했습니다. <br />
cocoapods 설치 과정에서 Ruby 버전이 2.7 이상이어야 한다는 오류 메시지가 출력되었습니다.

```bash
ruby -v
ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin22]
```

위 명령어로 현재 시스템에 설치된 Ruby 버전을 확인할 수 있습니다. <br />
저의 경우, Ruby 버전이 2.6.10으로 2.7 이상이 아니었습니다.

## 해결 방법

Ruby 버전을 2.7 이상으로 업그레이드하는 방법은 다음과 같습니다.

```bash
brew install ruby-build
brew install rbenv
rbenv install 2.7.5
rbenv global 2.7.5

ruby -v
ruby 2.7.5p203 (2022-04-12 revision 67958) [universal.arm64e-darwin22]
```

위 명령어를 통해 Ruby 버전을 2.7.5로 업그레이드하였습니다. <br />

이후, cocoapods 설치 과정에서 Ruby 버전 설정 오류가 발생하지 않았습니다. <br />

> **참고**: Ruby 버전을 업그레이드하는 과정에서 시스템 환경에 따라 추가적인 설정이 필요할 수 있습니다. <br />

위 방법을 통해서도 문제가 해결되지 않는다면, `.zshrc` 또는 `.bashrc` 파일에 환경 변수 설정을 추가하여 Ruby 버전을 변경할 수 있습니다. <br />
환경 변수 설정 방법은 다음과 같습니다.

```bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

위 명령어를 통해 `.zshrc` 파일에 환경 변수 설정을 추가하였습니다. <br />

이후, Ruby 버전 설정 오류가 발생하지 않았습니다. <br />

> **참고**: 환경 변수 설정을 변경한 이후에는 터미널을 재시작하거나 `source ~/.zshrc` 명령어를 실행하여 변경 사항을 적용해야 합니다. <br />
