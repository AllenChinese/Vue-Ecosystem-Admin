<template>
  <div class="dynamic-wrapper">
    <fm-generate-form
      :data="jsonData"
      :remote="remoteFuncs"
      :value="editData"
      ref="generateForm"
    >
    </fm-generate-form>
    <div class="submit">
      <el-button
        type="primary"
        @click="handleSubmit"
      >提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormMaking",

  data() {
    return {
      jsonData: {
        list: [
          {
            type: "input",
            name: "姓名",
            icon: "icon-input",
            options: {
              width: "100%",
              defaultValue: "",
              required: true,
              dataType: "string",
              pattern: "",
              placeholder: "请输入姓名",
              remoteFunc: "func_1554111852000_17668"
            },
            key: "1554111852000_17668",
            model: "user_name",
            rules: [
              { type: "string", message: "单行文本格式不正确" },
              { required: true, message: "姓名必须填写" }
            ]
          },
          {
            type: "radio",
            name: "单选框组",
            icon: "icon-radio-active",
            options: {
              inline: true,
              defaultValue: "男",
              showLabel: false,
              options: [
                { value: "男", label: "男" },
                { value: "女", label: "女" }
              ],
              required: true,
              width: "",
              remote: false,
              remoteOptions: [],
              props: { value: "value", label: "label" },
              remoteFunc: "func_1554111895000_27290"
            },
            key: "1554111895000_27290",
            model: "render",
            rules: [{ required: true, message: "单选框组必须填写" }]
          },
          {
            type: "date",
            name: "出生年月",
            icon: "icon-date",
            options: {
              defaultValue: "",
              readonly: false,
              disabled: false,
              editable: true,
              clearable: true,
              placeholder: "请输入你的出生日期",
              startPlaceholder: "",
              endPlaceholder: "",
              type: "date",
              format: "yyyy-MM-dd",
              timestamp: false,
              required: true,
              width: "",
              remoteFunc: "func_1554112394000_1314"
            },
            key: "1554112394000_1314",
            model: "date",
            rules: [{ required: true, message: "出生年月必须填写" }]
          },
          {
            type: "select",
            name: "城市",
            icon: "icon-select",
            options: {
              defaultValue: "",
              multiple: false,
              disabled: false,
              clearable: true,
              placeholder: "所在城市",
              required: false,
              showLabel: false,
              width: "200px",
              options: [
                { value: "杭州" },
                { value: "北京" },
                { value: "上海" },
                { value: "广州" },
                { value: "深圳" }
              ],
              remote: false,
              filterable: false,
              remoteOptions: [],
              props: { value: "value", label: "label" },
              remoteFunc: "func_1554112114000_88379"
            },
            key: "1554112114000_88379",
            model: "city",
            rules: []
          },
          {
            type: "checkbox",
            name: "技术语言",
            icon: "icon-check-box",
            options: {
              inline: true,
              defaultValue: [],
              showLabel: false,
              options: [
                { value: "JavaScript" },
                { value: "Nodejs" },
                { value: "Golang" },
                { value: "Java" },
                { value: ".Net" }
              ],
              required: true,
              width: "",
              remote: false,
              remoteOptions: [],
              props: { value: "value", label: "label" },
              remoteFunc: "func_1554111939000_20901"
            },
            key: "1554111939000_20901",
            model: "language",
            rules: [{ required: true, message: "技术语言必须填写" }]
          },
          {
            type: "color",
            name: "颜色",
            icon: "icon-color",
            options: {
              defaultValue: "",
              disabled: false,
              showAlpha: false,
              required: false,
              remoteFunc: "func_1554112200000_46544"
            },
            key: "1554112200000_46544",
            model: "color",
            rules: []
          },
          {
            type: "imgupload",
            name: "头像",
            icon: "icon-tupian",
            options: {
              defaultValue: [],
              size: {
                width: 100,
                height: 100
              },
              width: "100px",
              tokenFunc: "funcGetToken",
              token:
                "odaWpqNvohuJr1UrGQgOixj4Kw05b1stVq2-YjKh:-TgK3ne9brRme7bvpVYhuEwSZkQ=:eyJkZWxldGVBZnRlckRheXMiOjEsInJldHVybkJvZHkiOiJ7XCJrZXlcIjpcIiQoa2V5KVwiLFwiaGFzaFwiOlwiJChldGFnKVwiLFwiZnNpemVcIjokKGZzaXplKSxcImJ1Y2tldFwiOlwiJChidWNrZXQpXCIsXCJuYW1lXCI6XCIkKHg6bmFtZSlcIn0iLCJzY29wZSI6ImZvcm0tbWFraW5nIiwiZGVhZGxpbmUiOjE1NTQxMTYyNzB9",
              domain: "http://pfp81ptt6.bkt.clouddn.com/",
              disabled: false,
              length: 8,
              multiple: true,
              remoteFunc: "func_1554112288000_18145",
              required: true
            },
            key: "1554112288000_18145",
            model: "upload_img",
            rules: [
              {
                required: true,
                message: "头像必须填写"
              }
            ]
          },
          {
            type: "rate",
            name: "自我评价",
            icon: "icon-icon-test",
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: true,
              required: false,
              remoteFunc: "func_1554112367000_82969"
            },
            key: "1554112367000_82969",
            model: "rate",
            rules: []
          },
          {
            type: "textarea",
            name: "自我介绍",
            icon: "icon-diy-com-textarea",
            options: {
              width: "100%",
              defaultValue: "",
              required: false,
              disabled: false,
              pattern: "",
              placeholder: "说说你自己",
              remoteFunc: "func_1554112430000_76553"
            },
            key: "1554112430000_76553",
            model: "textarea",
            rules: []
          },
          {
            type: "editor",
            name: "编辑器",
            icon: "icon-fuwenbenkuang",
            options: {
              defaultValue: "",
              width: "",
              remoteFunc: "func_1554112353000_23315"
            },
            key: "1554112353000_23315",
            model: "editor",
            rules: []
          }
        ],
        config: { labelWidth: 100, labelPosition: "left", size: "small" }
      },
      editData: {
        user_name: "allen",
        render: "女",
        date: "2018-11-09",
        city: "杭州"
      },
      remoteFuncs: {
        funcGetToken(resolve) {
          // 头像 upload_img
          // 获取到token数据后执行回调函数
          // resolve(token)
        }
      }
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.generateForm
        .getData()
        .then(data => {
          // 数据校验成功
          // data 为获取的表单数据
          console.log(data);
        })
        .catch(e => {
          // 数据校验失败
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.dynamic-wrapper {
  margin: 5vh 0;
  width: 80%;
  font-size: 32px;
}
.submit {
  display: flex;
  justify-content: center;
}
</style>
