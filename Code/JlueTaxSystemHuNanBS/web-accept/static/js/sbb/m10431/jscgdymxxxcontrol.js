var jscgdymxxxcontrol = {
    //增加减税项目
    addPJFP: function (tdobj) {
        var ctx = $("#ctx").val();
        var newRowStr ='<tr style="height:26px;" >\n' +
            "<td    class=' bg1 br4'  ><a href='javascript:void(0)'  onclick='jscgdymxxxcontrol.removePJFP(this);' class='jiajian'><img src='"+ctx+"/static/css/images/jian.png'></a></td>\n" +
            '<td    class=" ft0 fs10 ac vm nw bg_ne br2  jscgdymxxxdes"    colspan="2" ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.jscgmc"  format="l50" index="4"  type="input"   ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.jscglx"  index="4"  type="list"  dn="wbsbsdsjmczjscgdymxxx.jscglxmc"  divname="wbsbsdsjmczjscgdymxxx.jscglx.list"    ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.jscgbh"  format="l" index="4"  type="input"  ></td>\n' +
            '<td    class=" ft0 fs10 ar vm nw bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.gyjz"  format="l16x2d" index="4"  type="input"  ></td>\n' +
            '<td    class=" ft0 fs10 ar vm nw bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.jsjc"  format="l16x2d" index="4"  type="input"   ></td>\n' +
            '<td    class=" ft0 fs10 al vm nw bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.gqqdsj"  format="l8e" index="4"  type="input"  ></td>\n' +
            '<td    class=" ft0 fs10 ar vm nw bg_ne br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.dysd"  format="l16x2d" index="4"  type="input"  isEditable=false ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.btzqymc"  format="l50" index="4"  type="input"  ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.btznsrsbh"  format="l18e" index="4"  type="input" ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.swjgmc"  format="l50" index="4"  type="input"  ></td>\n' +
            '<td    class=" ft0 fs10 ac vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.sfwglqy"  index="4"  type="list"  dn="wbsbsdsjmczjscgdymxxx.sfwglqymc"  divname="wbsbsdsjmczjscgdymxxx.sfwglqy.list"    ></td>\n' +
            '<td    class=" ft0 fs10 al vm nl bg0 br2"   colspan="2"   name="wbsbsdsjmczjscgdymxxx.bz"  format="l500" index="4"  type="input" ></td>\n' +
            "<td    class='  ar vm nw bg1 br0' ><a href='javascript:void(0)'  onclick='jscgdymxxxcontrol.removePJFP(this);' class='jiajian'><img src='"+ctx+"/static/css/images/jian.png'></a></td>\n" +
            '</tr>';
 //      var pjpf = $("td.jscgdymxxxdes");
   //     pjpf[0].rowSpan = pjpf[0].rowSpan + 1;
        $(tdobj).parent().parent().after(newRowStr);
        this.reloadPJFPidx();
        this.reloadtable();
        this.recountPJFP();
    },

    //删除表格行
    removePJFP: function (tdobj) {
        var pjpf = $("td.jscgdymxxxdes");
        var trobj  =  $(tdobj).parent().parent();
        trobj.remove();
        this.reloadPJFPidx();
        this.reloadtable();
        this.recountPJFP();
    },

    //重新设置表格索引
    reloadPJFPidx:function () {
        $("td.jscgdymxxxdes").each(function(i){
            var tdobj = $(this);
            tdobj.html(5+i);
            tdobj.parent().find("td").each(function(){
                if($(this).attr("index")){
                    $(this).attr("index",4 + i);
                }
            });
        });
    },

    recountPJFP:function (){
        var bqzydjtable = getTableObj("jscgdymxxx");
        bqzydjtable.isEdited = true;
        jscgdymxxxcheck.cf_L745(bqzydjtable, "wbsbsdsjmczjscgdymxxx.gyjz", "0", false);
        jscgdymxxxcheck.cf_L745(bqzydjtable, "wbsbsdsjmczjscgdymxxx.jsjc", "0", false);
        jscgdymxxxcheck.cf_L745(bqzydjtable, "wbsbsdsjmczjscgdymxxx.dysd", "0", false);
    },

    //初始化表格
    reloadtable: function () {
        $("#jscgdymxxx").reload();
    }
}