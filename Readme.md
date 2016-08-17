# AddThis Sharing Tools

## Installation

```
# bower install --save addthis-sharing
```

## Usage

### jQuery Initialization

First, initialize the jQuery plugin:

```
$('.btn-share').addthisSharing();
```

### Button Markup

Then, setup the share buttons. By default, all sharing services look at their
respective meta tags, but AddThis allows for customization of that information.
This plugin supports this as either data attributes or callbacks. Here are
examples of using default share information obtained by the social network and
using share information as data attributes:

#### Data Attributes

```
<button class="btn-share" data-share-service="facebook" data-share-title="Test title 1" data-share-description="Test description 1" data-share-url="http://adfero.com">Facebook</button>
```

#### Default Values

```
<button class="btn-share">Facebook</button>
```

## Plugin Options For Advanced Usage

Here are the following configuration options for the plugin and their defaults:

```
{
  'serviceAttribute': 'data-share-service',
  'titleAttribute': 'data-share-title',
  'descriptionAttribute': 'data-share-description',
  'URLAttribute': 'data-share-url',
  'pubIdAttribute': 'data-share-pubid',
  'serviceCallback': null,
  'URLCallback': null,
  'titleCallback': null,
  'descriptionCallback': null,
  'pubIdCallback': null,
  'apiRootURL': 'http://api.addthis.com/oexchange/0.8',
  'sharingWidthCallback': null,
  'sharingHeightCallback': null
}
```
