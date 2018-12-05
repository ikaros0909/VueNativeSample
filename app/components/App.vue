<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="진학대학교 출결관리시스템"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="메뉴"/>

                <Label class="drawer-item" text="출결현황"/>
                <Label class="drawer-item" text="신분증미지참자"/>
                <Label class="drawer-item" text="결시현황"/>
            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="msg1" col="1" row="1"/>
                <Label class="message" :text="msg2" col="2" row="2"/>
            </GridLayout>
        </RadSideDrawer>

        <Gradient direction="to right" colors="#FF0077, red, #FF00FF">
            <Label text="Best gradient." horizontalAlignment="center" style="color: white; padding: 20" />
        </Gradient>

    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg1: 'QR코드'
        , msg2: '사진촬영'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
