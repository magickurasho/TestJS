// Core
export { default as TestJS, debugLogger } from '@TestJS/core'

// Plugin base classes
export { default as UIPlugin } from '@TestJS/core/lib/UIPlugin.js'
export { default as BasePlugin } from '@TestJS/core/lib/BasePlugin.js'

/**
 * @deprecated Use `TestJS` instead of `Core`
 */
export function Core () {
  throw new Error('Core has been renamed to TestJS')
}

// Utilities
export * as server from '@TestJS/companion-client'

import * as ProviderView from '@TestJS/provider-views'
export const views = { ProviderView }

// Stores
export { default as DefaultStore } from '@TestJS/store-default'
export { default as ReduxStore } from '@TestJS/store-redux'

// UI plugins
export { default as Dashboard } from '@TestJS/dashboard'
export { default as DragDrop } from '@TestJS/drag-drop'
export { default as DropTarget } from '@TestJS/drop-target'
export { default as FileInput } from '@TestJS/file-input'
export { default as ImageEditor } from '@TestJS/image-editor'
export { default as Informer } from '@TestJS/informer'
export { default as ProgressBar } from '@TestJS/progress-bar'
export { default as StatusBar } from '@TestJS/status-bar'

// Acquirers
export { default as Audio } from '@TestJS/audio'
export { default as Box } from '@TestJS/box'
export { default as Dropbox } from '@TestJS/dropbox'
export { default as Facebook } from '@TestJS/facebook'
export { default as GoogleDrive } from '@TestJS/google-drive'
export { default as Instagram } from '@TestJS/instagram'
export { default as OneDrive } from '@TestJS/onedrive'
export { default as RemoteSources } from '@TestJS/remote-sources'
export { default as ScreenCapture } from '@TestJS/screen-capture'
export { default as Unsplash } from '@TestJS/unsplash'
export { default as Url } from '@TestJS/url'
export { default as Webcam } from '@TestJS/webcam'
export { default as Zoom } from '@TestJS/zoom'

// Uploaders
export { default as AwsS3 } from '@TestJS/aws-s3'
export { default as AwsS3Multipart } from '@TestJS/aws-s3-multipart'
export { default as Transloadit } from '@TestJS/transloadit'
export { default as Tus } from '@TestJS/tus'
export { default as XHRUpload } from '@TestJS/xhr-upload'

// Miscellaneous
export { default as Compressor } from '@TestJS/compressor'
export { default as Form } from '@TestJS/form'
export { default as GoldenRetriever } from '@TestJS/golden-retriever'
export { default as ReduxDevTools } from '@TestJS/redux-dev-tools'
export { default as ThumbnailGenerator } from '@TestJS/thumbnail-generator'

// Special hack for Transloadit static exports
import Transloadit, { COMPANION_URL, COMPANION_ALLOWED_HOSTS } from '@TestJS/transloadit'
Transloadit.COMPANION_URL = COMPANION_URL
Transloadit.COMPANION_ALLOWED_HOSTS = COMPANION_ALLOWED_HOSTS

export const locales = {}
