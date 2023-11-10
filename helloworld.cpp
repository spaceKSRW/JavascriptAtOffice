#include<iostream>
#include<queue>
#include<utility>
#include<algorithm>
#include<map>
using namespace std;
class TreeNode{
public:
TreeNode* left;
int val;
TreeNode* right;
TreeNode(int val)
{
    this->val=val;
    left=nullptr;
    right=nullptr;
}};
void getParent(unordered_map<TreeNode* , TreeNode*> mp , TreeNode* root)
{
queue<TreeNode*> que;
que.push(root);
while (!que.empty())
{
    TreeNode* node = que.front();
    que.pop();
    if(node->left)
    {
        que.push(node->left);
        mp[node->left]=node;
    }
    if(node->right)
    {
        que.push(node->right);
        mp[node->right]=node;
    }
}
for(auto vals : mp)
{
    cout<<vals<<" ";
}
}
void bt(TreeNode* root)
{
    unordered_map<TreeNode* , TreeNode*> mp;
    getParent(mp,root);
}
int main(){
TreeNode* root=nullptr;
root = new TreeNode(1);
root->left = new TreeNode(2);
root->right = new TreeNode(3);
root->left->left= new TreeNode(4);
root->left->right = new TreeNode(5);
root->right->left = new TreeNode(6);
root->right->right = new TreeNode(7);
bt(root);
    return 0;
}