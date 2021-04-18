class Member{
    constructor(memberId,person){
        this.memberId=memberId,
        this.person=person;
    }
    getPerson(){
      return this.person
    }
    getMemberId(){
      return this.memberId;
    }

}
// exports.Member = Member;