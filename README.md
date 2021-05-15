![License](https://img.shields.io/badge/License-MIT-yellow.svg) ![Stars](https://img.shields.io/github/stars/arjun-dureja/coinbase-clone?style=flat) ![Last Commit](https://img.shields.io/github/last-commit/arjun-dureja/coinbase-clone)

# Coinbase Clone

A work-in-progress clone of the [Coinbase](https://apps.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730) mobile app built with [React Native](https://reactnative.dev/) and TypeScript.

The Home screen is complete which includes the Watchlist, Top Movers list, and News list. The bottom tab-bar is also finished.

Next steps include building the Portfolio and Prices screen with an interactable chart component.

## Demo
https://user-images.githubusercontent.com/16995513/118372757-1dc83200-b581-11eb-8c6d-8d1d8f7df10c.MP4

## Try The App
Try it with [Expo](https://expo.io/@arjundureja/projects/coinbase-clone).

Note: The app hasn't been tested on Android yet, only on iOS.

## Installation
Install and run the app locally with the following steps (No API keys required):

Clone this repo:
```shell
git clone git@github.com:arjun-dureja/coinbase-clone.git
```

Install packages:
```shell
cd coinbase-clone
npm install
```

Start Metro Bundler:
```shell
npm start
```

- To edit the Watchlist, modify the ```coins``` array in the [watchlist action](https://github.com/arjun-dureja/coinbase-clone/blob/main/src/store/actions/watchlist.ts) file.

## Stack
- [React Native](https://reactnative.dev/)
- [Expo](http://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-navigation](http://reactnavigation.org/)
- [react-native-draggable-flatlist](https://github.com/computerjazz/react-native-draggable-flatlist)
- [Ionicons](https://ionic.io/ionicons)

## API's Used
- [Coinbase Pro](https://docs.pro.coinbase.com/) - Used to retrieve list of coins supported by Coinbase
- [CryptoCompare](https://min-api.cryptocompare.com/documentation) - Used for crypto price data and latest news articles
- [CoinMarketCap](https://coinmarketcap.com/api/) - Used for coin logos

## Screenshots

### Home
<img
		width="375"
		alt="Home"
		src="https://user-images.githubusercontent.com/16995513/118373965-7d294080-b587-11eb-9ff3-e6e3284eeb90.png">

### Watchlist
<img
		width="375"
		alt="Watchlist"
		src="https://user-images.githubusercontent.com/16995513/118374000-b661b080-b587-11eb-9488-e71ed5ecc145.png">
<img
		width="315"
		alt="Watchlist Gif"
		src="https://user-images.githubusercontent.com/16995513/118374342-93380080-b589-11eb-9ded-0916167774d0.gif">

### Top movers
<img
		width="375"
		alt="Top movers"
		src="https://user-images.githubusercontent.com/16995513/118374016-cda09e00-b587-11eb-81c1-c05934160875.png">
<img
		width="315"
		alt="Top movers"
		src="https://user-images.githubusercontent.com/16995513/118374499-6fc18580-b58a-11eb-889a-aef842f134d8.gif">

### News
<img
		width="375"
		alt="News home"
		src="https://user-images.githubusercontent.com/16995513/118374032-e6a94f00-b587-11eb-9f3c-592118b2f66f.png">
<img
		width="375"
		alt="News list"
		src="https://user-images.githubusercontent.com/16995513/118374034-ea3cd600-b587-11eb-9bbd-214be48b906b.png">
