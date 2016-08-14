import Parser, { linkParser } from '../parser';

/**
 * v-el 指令解析模块
 */
export function VEl () {
	Parser.apply(this, arguments);
}
var vel = linkParser(VEl);

/**
 * 解析 v-el 指令
 * 不需要在 model 中声明，且不需要实例化的 Directive
 */
vel.parse = function () {
	// 不能在 vfor 中使用
	if (!this.$scope) {
		let register = this.desc.expression;
		this.vm.$data.$els[register] = this.el;
	}
}