<template>
	<div class="page-login">
		123
	</div>
</template>

<script>
import {
  companyList
} from "@/api/banner";
import windowRight from "@/components/windowRight/windowRight";
import { mapMutations } from "vuex";

var that = null;
export default {
  components: {
    windowRight
  },
  data() {
    return {
      title: ['我','我','我','我','我'],
      readonly: false,
      form: {
        username: "",
        password: "",
      },
      list: []
    };
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {},
  methods: {
    async getData() {
      let {data} = await companyList();
      this.list = data || []
      console.log('list:', data);
    },
    toLogin() {
    },
  }
};
</script>

<style lang="scss" scoped>
$color: #2c3142;

.page-login {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	position: relative;
	background-color: #fff;
	color: $color;

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 90%;
		pointer-events: none;
		transform: rotate(180deg) scaleY(-1);

		.cl-svg {
			height: 100%;
			width: 100%;
			fill: $color;
		}
	}

	.copyright {
		position: absolute;
		bottom: 15px;
		left: 0;
		text-align: center;
		width: 100%;
		color: #666;
		font-size: 14px;
	}

	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 50%;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 9;

		.logo {
			height: 50px;
			margin-bottom: 20px;
			display: flex;
			align-items: center;

			img {
				height: 46px;
				background-color: $color;
				border-radius: 50px;
				border: 3px solid $color;
				margin-right: 10px;
			}

			span {
				display: inline-block;
				font-size: 38px;
				font-weight: bold;
				line-height: 1;
				letter-spacing: 3px;

				&:nth-child(6) {
					animation: dou 1s infinite linear;
				}
			}
		}

		.desc {
			font-size: 15px;
			letter-spacing: 1px;
			margin-bottom: 50px;
		}

		.form {
			width: 300px;

			:deep(.el-form) {
				.el-form-item {
					margin-bottom: 20px;
				}

				.el-form-item__label {
					padding-left: 5px;
				}

				input {
					height: 45px;
					width: 100%;
					box-sizing: border-box;
					font-size: 17px;
					border: 0;
					border-radius: 0;
					background-color: #f8f8f8;
					padding: 0 15px;
					border-radius: 6px;
					position: relative;

					&:-webkit-autofill {
						box-shadow: none;
						-webkit-box-shadow: 0 0 0 1000px #f8f8f8 inset;
						box-shadow: 0 0 0 1000px #f8f8f8 inset;
					}

					&::placeholder {
						font-size: 14px;
					}
				}

				.row {
					display: flex;
					align-items: center;
					width: 100%;
					position: relative;

					.pic-captcha {
						position: absolute;
						right: 0;
						top: 0;
					}
				}
			}
		}

		.op {
			display: flex;
			justify-content: center;
			margin-top: 40px;

			:deep(.el-button) {
				height: 45px;
				width: 100%;
				font-size: 15px;
				border-radius: 6px;
				letter-spacing: 1px;
			}
		}
	}
}

@media screen and (max-width: 1024px) {
	.page-login {
		.box {
			width: 100%;
		}
	}
}
</style>
