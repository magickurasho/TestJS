import * as TestJS from '..'
// eslint-disable-next-line import/newline-after-import
// @ts-ignore
;(() => {
  const TestJS = new TestJS.TestJS({ autoProceed: false })
  TestJS.use(TestJS.Dashboard, { trigger: '#up_load_file_01' })
  TestJS.use(TestJS.DragDrop, { target: '#ttt' })
  TestJS.use(TestJS.XHRUpload, {
    bundle: true,
    endpoint: 'xxx',
    fieldName: 'up_load_file',
  })
  TestJS.on('upload-success', (fileCount, { body, uploadURL }) => {
    console.log(fileCount, body, uploadURL, ` files uploaded`)
  })
})()
;(() => {
  const TestJS = new TestJS.TestJS({ autoProceed: false })
    .use(TestJS.Dashboard, { trigger: '#select-files' })
    .use(TestJS.GoogleDrive, {
      target: TestJS.Dashboard,
      companionUrl: 'https://companion.TestJS.io',
    })
    .use(TestJS.Instagram, {
      target: TestJS.Dashboard,
      companionUrl: 'https://companion.TestJS.io',
    })
    .use(TestJS.Webcam, { target: TestJS.Dashboard })
    .use(TestJS.ScreenCapture)
    .use(TestJS.Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

  TestJS.on('complete', (result) => {
    console.log('Upload result:', result)
  })
})()
;(() => {
  const TestJS = new TestJS.TestJS()
  TestJS.use(TestJS.DragDrop, { target: '.TestJSDragDrop' })
  TestJS.use(TestJS.Tus, { endpoint: '//tusd.tusdemo.net/files/' })
})()
