<template>
  <el-popover
    class="BaseSelectMultiple"
    placement="bottom"
    :trigger="trigger"
    :popper-class="className"
    @show="isPopOverShow = true"
    @hide="isPopOverShow = false"
  >
    <el-button slot="reference" class="BaseSelectMultiple-btn">
      <div class="content">
        <slot name="prefix"></slot>
        <slot name="content">
          <div class="text">
            <span v-if="selectedOptions && !selectedOptions.length"
              >{{ selectName }}
            </span>
            <template v-else>
              <span>{{ `${selectName}:` }}</span>
              <span v-if="selectedOptions">{{
                selectedOptions.map((option) => option.label).join(", ")
              }}</span>
            </template>
          </div>
        </slot>
        <slot name="afterfix">
          <i class="el-icon-arrow-down"></i>
        </slot>
        <i
          v-if="showDelIcon"
          class="el-icon-minus"
          v-show="selectedOptions && selectedOptions.length"
          @click.stop="onClearSelectedOption"
        ></i>
      </div>
    </el-button>

    <div class="BaseSelectMultiple-option-container">
      <slot name="list">
        <ul>
          <li
            class="BaseSelectMultiple-option-item"
            v-for="(option, index) in options"
            :key="`popover-multiple-select-${option.label}-${index}`"
            @click="onDropDownItemClick(option)"
          >
            <span
              class="option-label"
              :style="{
                color: new Set(selectedOptions).has(option)
                  ? variables.colorPrimary
                  : '',
              }"
              >{{ option.label }}</span
            >
            <IconCheckBig
              v-if="new Set(selectedOptions).has(option)"
              :fill="variables.colorPrimary"
            ></IconCheckBig>
          </li>
        </ul>
      </slot>
    </div>
  </el-popover>
</template>
<script lang="ts">
import { Component, Vue, Prop, ModelSync, Watch } from "vue-property-decorator";
import IconCheckBig from "./IconCheckBig.vue";

interface OptionItem {
  label: string;
  value: any;
}

@Component({
  name: "BaseSelectMulti",
  components: {
    IconCheckBig,
  },
})
export default class BaseSelectMulti extends Vue {
  @ModelSync("SelectedOptions", "update:selectedoptions", {
    type: Array,
  })
  selectedOptions!: OptionItem[];

  @Prop({ default: "click" }) readonly trigger!: string;

  @Prop() readonly delay!: number;

  @Prop({ required: false, default: "test" }) readonly className!: string;

  @Prop() readonly placeholder!: string;

  @Prop({ type: Number }) readonly selectCountMax!: number;

  @Prop({ type: Array as () => OptionItem[] }) readonly options!: OptionItem[];

  @Prop() readonly selectName!: string;

  @Prop({ type: Boolean, default: true }) readonly showDelIcon!: boolean;

  @Prop({ type: Boolean, default: true }) readonly isMultipleType!: boolean;

  public onDropDownItemClick(option: OptionItem) {
    // 单选
    if (!this.isMultipleType) {
      if (this.selectedOptions.includes(option)) {
        // 双击取消选中
        this.selectedOptions = [];
      } else {
        this.selectedOptions = [option];
      }
      return;
    }

    if (this.selectedOptions.includes(option)) {
      this.selectedOptions.splice(
        this.selectedOptions.indexOf(option) >>> 0,
        1
      );
    } else {
      console.log(this.selectCountMax, "count Max");
      if (
        (this.selectCountMax !== undefined &&
          this.selectedOptions.length >= this.selectCountMax) ||
        (!this.isMultipleType && this.selectedOptions.length >= 1)
      )
        return;
      this.selectedOptions.push(option);
    }
  }

  private onClearSelectedOption() {
    this.selectedOptions = [];
  }
}
</script>
<style lang="scss">
.BaseSelectMultiple-btn {
  border: unset;
  color: #000 !important;
  position: relative;
  margin-right: 10px;
  &:hover {
    background: gray;
  }
  .content {
    display: flex;
    align-items: center;
    .text {
      display: inline-block;
      margin: 0 5px;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .el-icon-minus {
      position: absolute;
      top: 0;
      left: 100%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: red;
      color: #fff;
    }
  }
}
.BaseSelectMultiple-option-container {
  max-height: 260px;
  overflow-y: auto;
  & > ul {
    margin: 0;
    padding: 0;
  }
  .BaseSelectMultiple-option-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5c6975;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
